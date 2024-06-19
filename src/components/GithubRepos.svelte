<!-- src/components/GithubRepos.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import type { Repo } from '$lib/types';
	import GithubRepoCard from './GithubRepoCard.svelte';
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
	let repos: Repo[] = [];
	let loadingRepos: Repo[] = [];
	let errorMessage: string;

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

	onMount(async () => {
		const now = Date.now();
		const cachedRepos = localStorage.getItem(CACHE_KEY);
		const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

		if (cachedRepos && cachedTimestamp && now - parseInt(cachedTimestamp) < CACHE_DURATION) {
			repos = JSON.parse(cachedRepos) as Repo[];
		} else {
			try {
				repos = await fetchRepos();
				localStorage.setItem(CACHE_KEY, JSON.stringify(repos));
				localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
			} catch (err) {
				errorMessage = (err as Error).message;
			}
		}
	});

	async function fetchRepoData(repo: string): Promise<Repo> {
		const response = await fetch(`${GITHUB_API_URL}${GITHUB_OWNER}/${repo}`);
		if (!response.ok) {
			throw new Error(`Failed to fetch ${repo}: ${response.statusText}`);
		}
		return response.json();
	}

	async function fetchRepos(): Promise<Repo[]> {
		return Promise.all(GITHUB_REPOS.map(fetchRepoData));
	}
</script>

<div class="mx-auto w-full py-2 lg:w-4/5">
	<div class="px-4 py-6 dark:bg-githubGray-dark sm:p-8">
		<span class="ml-8 text-lg font-semibold text-gray-700 dark:text-gray-200"
			>Active Projects / Libraries</span
		>
		<div class="-m-4 flex flex-wrap">
			{#if errorMessage}
				<div class="error">Error: {errorMessage}</div>
			{:else if !repos.length}
				{#each loadingRepos as repo}
					<GithubRepoCard {repo} />
				{/each}
			{:else}
				{#each repos as repo}
					<GithubRepoCard {repo} />
				{/each}
			{/if}
		</div>
	</div>
</div>

<style>
	.repo {
		padding: 1rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		margin: 1rem 0;
	}
	.error {
		color: red;
	}
</style>
