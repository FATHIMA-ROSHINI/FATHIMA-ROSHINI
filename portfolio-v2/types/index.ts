export interface Project {
  title: string;
  slug: string;
  tagline: string;
  description: {
    problem: string;
    solution: string;
    outcome: string;
  };
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image?: string; // Placeholder for future
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  skills: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}
