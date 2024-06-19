const GITHUB_API_URL = 'https://api.github.com/repos';
const GITHUB_OWNER = 'KyleCulp';
const GITHUB_REPOS = ["kyleculpcom", "homelab", "ex_pve", "ex_pbs", "ex_pmg"]
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds


export interface RepoData {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

async function fetchRepoData(repo: string): Promise<RepoData> {
  const response = await fetch(`${GITHUB_API_URL}/${GITHUB_OWNER}/${repo}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${repo}: ${response.statusText}`);
  }
  return response.json();
}

// async function fetchAndCacheRepos(request: Request): Promise<Response> {
//   const cache = caches.default;
//   const cacheKey = new Request(request.url);
//   const cachedResponse = await cache.match(cacheKey);

//   if (cachedResponse) {
//     return cachedResponse;
//   }

//   const repos = await Promise.all(REPO_NAMES.map(fetchRepoData));
//   const response = new Response(JSON.stringify(repos), {
//     headers: { 'Content-Type': 'application/json' }
//   });

//   // Cache the response for 15 minutes
//   response.headers.append('Cache-Control', `max-age=${CACHE_DURATION / 1000}`);
//   await cache.put(cacheKey, response.clone());

//   return response;
// }




// export async function fetchRepoData(repo: string, owner: string = "KyleCulp"): Promise<RepoData> {
//   const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
//   if (!response.ok) throw new Error('Failed to fetch repository data');
//   console.log(response.json());
//   return response.json() as Promise<RepoData>;
// }
