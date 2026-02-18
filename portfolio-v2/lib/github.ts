import { GitHubRepo } from '@/types';

export async function getRecentRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch('https://api.github.com/users/FATHIMA-ROSHINI/repos?sort=updated&per_page=10', {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      console.error('Failed to fetch repos', res.statusText);
      return [];
    }

    const repos = await res.json();
    
    // Filter out forks and ensuring we have description
    return repos
      .filter((repo: any) => !repo.fork)
      .slice(0, 6) // Top 6 most recent
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        updated_at: repo.updated_at,
        topics: repo.topics || []
      }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}
