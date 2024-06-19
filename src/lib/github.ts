const GITHUB_API_URL = 'https://api.github.com/repos/';
const CACHE_KEY = 'github_repos';
const CACHE_TIMESTAMP_KEY = 'github_repos_timestamp';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds
const GITHUB_OWNER = 'KyleCulp';
const GITHUB_REPOS = [
  'kyleculpcom',
  'homelab',
  'noteflow-frontend',
  'noteflow-backend',
  'ex_pve',
  'ex_pbs',
  'ex_pmg',
  'ex_opn'
];

export interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage?: string;
  language: string;
  topics?: string[];
  is_template?: boolean;
}

export const fetchReposData = async (): Promise<Repo[]> => {
  return Promise.all(GITHUB_REPOS.map(fetchRepoData));
}

async function fetchRepoData(repo: string): Promise<Repo> {
  const response = await fetch(`${GITHUB_API_URL}${GITHUB_OWNER}/${repo}`);
  if (!response.ok) throw new Error(`Failed to fetch ${repo}: ${response.statusText}`);
  return response.json();
}

export const fetchRepoSkeleton = (): Repo[] => {
  let loadingRepos: Repo[] = [];
  GITHUB_REPOS.forEach((repoName, index) => {
    const repo: Repo = {
      id: index,
      name: repoName,
      description: 'Loading...',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/KyleCulp/' + repoName,
      language: ''
    };
    loadingRepos.push(repo);
  });
  return loadingRepos;
}