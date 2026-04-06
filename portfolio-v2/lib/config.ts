import { Profile, Project } from '@/types';

export const PROFILE: Profile = {
  name: "Fathima Roshini Siyad",
  title: "AI Engineer",
  tagline: "I build intelligent systems that bridge software, AI, and real-world problem-solving. Focused on innovation, rapid prototyping, and scalable product engineering.",
  bio: `I'm an AI engineer driven by curiosity and a passion for building systems that matter. My work spans autonomous systems, computer vision, and health-tech AI applications. I thrive in rapid prototyping environments and love turning complex problems into elegant, scalable solutions. With experience across hackathons, internships, and independent projects, I've developed a unique blend of theoretical knowledge and hands-on engineering skills.`,
  skills: [
    "Machine Learning",
    "Computer Vision",
    "Robotics",
    "Full Stack",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "OpenCV",
    "MediaPipe",
    "INAV",
    "Pixhawk",
    "Python",
    "Flask",
    "React"
  ],
  socials: {
    github: "https://github.com/FATHIMA-ROSHINI",
    linkedin: "https://www.linkedin.com/in/fathima-roshini", // Placeholder but needed
    email: "mailto:roshini@example.com" // Placeholder
  }
};

export const PROJECTS: Project[] = [
  {
    title: "Air Guardian Drone",
    slug: "air-guardian",
    tagline: "Autonomous Indoor Stability & Control",
    description: {
      problem: "Traditional manual drones struggle with stable indoor flight due to GPS denial and sensor noise.",
      solution: "Built an autonomous micro-drone with optical flow stabilization, positional control using INAV, and predictive drift correction algorithms.",
      outcome: "Achieved ~40% improvement in indoor stability and reduced drift to <25cm over a 3m hover duration."
    },
    techStack: ["Python", "INAV", "Pixhawk", "Optical Flow", "Kalman Filters"],
    links: {
      github: "https://github.com/FATHIMA-ROSHINI/air-guardian", // Placeholder
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Neuro Sight",
    slug: "neuro-sight",
    tagline: "Cognitive Load Estimation via Micro-expressions",
    description: {
      problem: "Early neurological signals are subtle and often untracked, leading to delayed understanding of cognitive strain.",
      solution: "Developed an ML model using micro-expressions, blink rate, and eye-movement features to estimate cognitive load.",
      outcome: "Prototype achieved consistent prediction accuracy during controlled cognitive tests."
    },
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "MediaPipe"],
    links: {
      github: "https://github.com/FATHIMA-ROSHINI/neuro-sight", // Placeholder
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Respi AI",
    slug: "respi-ai",
    tagline: "AI-Powered Respiratory Analysis",
    description: {
      problem: "Respiratory conditions often go undetected until symptoms worsen.",
      solution: "Created an AI model that analyzes breathing audio + spectrograms to detect abnormal respiration patterns.",
      outcome: "Prototype detected anomalies with >80% accuracy in test recordings."
    },
    techStack: ["Python", "Librosa", "TensorFlow", "Flask"],
    links: {
      github: "https://github.com/FATHIMA-ROSHINI/respi-ai", // Placeholder
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
  }
];
