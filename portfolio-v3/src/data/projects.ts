export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
  stars: number;
  status: 'Production' | 'Beta' | 'Exploration';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Respi-AI',
    description: 'AI-powered early respiratory risk assessment using cough and breathing sound analysis. Deep Learning & Audio Processing for Healthcare.',
    tags: ['Deep Learning', 'Audio Processing', 'Healthcare AI', 'FastAPI', 'Flutter'],
    repo: 'https://github.com/FATHIMA-ROSHINI/RESPI-AI',
    stars: 0,
    status: 'Production',
  },
  {
    id: '2',
    title: 'AirGuardian',
    description: 'Autonomous indoor drone with real-time air quality mapping and hazardous gas detection. Robotics meets AI Monitoring.',
    repo: 'https://github.com/FATHIMA-ROSHINI/AirGuardian',
    tags: ['Robotics', 'AI Monitoring', 'Autonomous Navigation', 'IoT'],
    stars: 0,
    status: 'Beta',
  },
  {
    id: '3',
    title: 'NeuroSight',
    description: 'Browser-based AI screening with TensorFlow.js inference — 100% on-device, zero data transmission. Privacy-first eye movement detection.',
    repo: 'https://github.com/FATHIMA-ROSHINI/NeuroSight',
    demo: 'https://neuro-sight.vercel.app',
    tags: ['React', 'FastAPI', 'TensorFlow.js', 'Computer Vision', 'PWA'],
    stars: 0,
    status: 'Production',
  },
  {
    id: '4',
    title: 'Sentinel Fraud Engine',
    description: 'Real-time fraud detection with streaming pipeline, SHAP explainability, and live dashboard.',
    repo: 'https://github.com/FATHIMA-ROSHINI/sentinel-fraud-engine',
    tags: ['Python', 'SHAP', 'React', 'Streaming', 'MLOps'],
    stars: 0,
    status: 'Beta',
  },
];
