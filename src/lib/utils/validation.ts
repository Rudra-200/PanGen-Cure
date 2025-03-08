export function validateFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type)
}

export function validateFileSize(file: File, maxSizeInMB: number): boolean {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024
  return file.size <= maxSizeInBytes
}

export function validateImageDimensions(file: File, minWidth: number, minHeight: number): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(img.src)
      resolve(img.width >= minWidth && img.height >= minHeight)
    }
    img.onerror = () => resolve(false)
    img.src = URL.createObjectURL(file)
  })
}

export async function validateCTScan(file: File): Promise<{
  isValid: boolean
  error?: string
}> {
  const allowedTypes = ["image/png", "image/jpeg", "application/dicom"]
  const maxSize = 10 // MB
  const minDimensions = { width: 224, height: 224 }

  if (!validateFileType(file, allowedTypes)) {
    return {
      isValid: false,
      error: "Invalid file type. Please upload a PNG, JPEG, or DICOM file.",
    }
  }

  if (!validateFileSize(file, maxSize)) {
    return {
      isValid: false,
      error: `File size exceeds ${maxSize}MB limit.`,
    }
  }

  const hasSufficientDimensions = await validateImageDimensions(file, minDimensions.width, minDimensions.height)

  if (!hasSufficientDimensions) {
    return {
      isValid: false,
      error: `Image dimensions must be at least ${minDimensions.width}x${minDimensions.height} pixels.`,
    }
  }

  return { isValid: true }
}

