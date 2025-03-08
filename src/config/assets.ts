import type { AssetMetadata } from "@/types"

export const videos: Record<string, AssetMetadata> = {
  "intro-animation.mp4": {
    title: "PanGen Introduction Animation",
    description: "Smooth 3D animation showing the PanGen logo and mission statement",
    tags: ["branding", "animation", "intro"],
  },
  "ct-scan-process.mp4": {
    title: "CT Scan Analysis Process",
    description: "Animation demonstrating how PanGen analyzes CT scans",
    tags: ["medical", "technical", "process"],
  },
  "research-overview.mp4": {
    title: "Research Methodology Overview",
    description: "Video explaining our research approach and methodology",
    tags: ["research", "methodology", "overview"],
  },
  "ai-visualization.mp4": {
    title: "AI Model Visualization",
    description: "Dynamic visualization of our AI models in action",
    tags: ["ai", "technical", "visualization"],
  },
  "loading-animation.mp4": {
    title: "Loading Animation",
    description: "Smooth loading animation with PanGen branding",
    tags: ["ui", "animation", "loading"],
  },
}

export const images: Record<string, AssetMetadata> = {
  "hero-bg.jpg": {
    title: "Hero Background",
    description: "Abstract medical background for hero section",
    tags: ["background", "medical", "hero"],
  },
  "team-photos": {
    "rudra.jpg": {
      title: "Rudra Prasanna Mishra",
      description: "Lead Researcher portrait",
      tags: ["team", "portrait"],
    },
    "vamsi.jpg": {
      title: "D Vamsi Krishna",
      description: "Data Scientist portrait",
      tags: ["team", "portrait"],
    },
    "jnanasri.jpg": {
      title: "Jnanasri Kalakota",
      description: "Machine Learning Engineer portrait",
      tags: ["team", "portrait"],
    },
    "gayathri.jpg": {
      title: "Gayathri Reddy Epur",
      description: "Clinical Specialist portrait",
      tags: ["team", "portrait"],
    },
  },
  research: {
    "ct-scan-samples.jpg": {
      title: "CT Scan Samples",
      description: "Collection of annotated CT scan samples",
      tags: ["medical", "research", "samples"],
    },
    "biomarker-analysis.jpg": {
      title: "Biomarker Analysis",
      description: "Visualization of biomarker analysis process",
      tags: ["medical", "research", "biomarker"],
    },
    "ai-architecture.jpg": {
      title: "AI Architecture",
      description: "Diagram of PanGen's AI architecture",
      tags: ["technical", "ai", "architecture"],
    },
  },
}

export const animations: Record<string, AssetMetadata> = {
  "particle-network.json": {
    title: "Particle Network Animation",
    description: "Interactive particle network background animation",
    tags: ["background", "interactive", "animation"],
  },
  "data-flow.json": {
    title: "Data Flow Animation",
    description: "Animation showing data flow through PanGen system",
    tags: ["technical", "animation", "flow"],
  },
  "results-visualization.json": {
    title: "Results Visualization",
    description: "Dynamic visualization of analysis results",
    tags: ["results", "animation", "visualization"],
  },
}

