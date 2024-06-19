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

