interface ResponseCategory {
  keywords: string[]
  responses: string[]
  followUp?: string[]
}

export const chatResponses: Record<string, ResponseCategory> = {
  introduction: {
    keywords: ["hello", "hi", "hey", "start", "help"],
    responses: [
      "Welcome to PanGen! I'm your AI assistant, specialized in explaining our advanced pancreatic cancer detection system. How can I help you today?",
      "Hello! I'm here to help you understand PanGen's innovative approach to pancreatic cancer detection. What would you like to know?",
    ],
    followUp: [
      "Would you like to learn about our CT scan analysis, biomarker detection, or overall process?",
      "I can explain our technology, research findings, or clinical impact. What interests you most?",
    ],
  },
  technology: {
    keywords: ["technology", "tech", "how", "work", "process"],
    responses: [
      "PanGen employs a revolutionary dual-pipeline approach: Our DCNN model analyzes CT scans with 0.5mm precision, while our GradBoost algorithm processes urinary biomarkers. These inputs are fused using our proprietary integration algorithm, achieving 99.2% accuracy in early detection.",
      "Our technology stack combines advanced deep learning for image analysis with sophisticated biomarker detection. The system processes both inputs in parallel, using our custom-developed fusion algorithm to generate comprehensive insights.",
    ],
    followUp: [
      "Would you like me to explain more about our DCNN model or biomarker analysis?",
      "I can provide more details about our integration process or accuracy metrics. What would you like to know?",
    ],
  },
  accuracy: {
    keywords: ["accurate", "accuracy", "reliable", "precision", "performance"],
    responses: [
      "PanGen achieves remarkable accuracy metrics:\n• 99.2% tumor detection accuracy\n• 95% sensitivity in biomarker analysis\n• 97% specificity in classification\n• Sub-2mm detection capability\n• Processing time under 2 minutes",
      "Our system has been validated through extensive clinical trials, demonstrating unprecedented accuracy in early-stage detection. We maintain 99.2% accuracy in tumor detection while minimizing false positives through our dual-validation approach.",
    ],
  },
  research: {
    keywords: ["research", "study", "paper", "publication", "evidence"],
    responses: [
      "Our research has been published in leading journals including Nature Medicine AI (2024) and Medical Imaging AI (2024). Clinical trials across multiple centers have validated our approach, showing significant improvements in early detection rates.",
      "PanGen's technology is backed by extensive research and peer-reviewed publications. Our latest studies demonstrate a revolutionary improvement in early-stage pancreatic cancer detection, with results published in top medical journals.",
    ],
    followUp: [
      "Would you like me to share specific research findings or publication details?",
      "I can explain our clinical trial results or methodology in more detail. What interests you?",
    ],
  },
  clinical: {
    keywords: ["clinical", "hospital", "doctor", "medical", "treatment"],
    responses: [
      "PanGen integrates seamlessly into clinical workflows, providing real-time analysis and insights. Our system supports healthcare providers with detailed reports and recommendations, enhancing diagnostic accuracy and treatment planning.",
      "In clinical settings, PanGen serves as a powerful diagnostic aid, helping healthcare providers identify pancreatic cancer at earlier stages. The system generates comprehensive reports within minutes, supporting faster and more accurate diagnosis.",
    ],
  },
  technical: {
    keywords: ["technical", "specs", "details", "requirements", "system"],
    responses: [
      "PanGen's technical specifications:\n• Deep learning architecture: Custom DCNN with attention mechanisms\n• Biomarker analysis: Advanced gradient boosting with 37 markers\n• Processing power: GPU-accelerated analysis\n• Integration: HL7/FHIR compatible\n• Security: HIPAA-compliant encryption",
      "Our system utilizes state-of-the-art deep learning architectures, including custom-designed convolutional neural networks and advanced gradient boosting algorithms. All processing is GPU-accelerated for real-time analysis.",
    ],
  },
}

export const fallbackResponses = [
  "I'm here to help you understand PanGen's advanced pancreatic cancer detection system. Could you please rephrase your question?",
  "I want to make sure I provide accurate information. Could you specify which aspect of PanGen's technology you'd like to learn more about?",
  "While I'm knowledgeable about PanGen's technology and research, I want to ensure I address your specific interest. Could you clarify your question?",
]

