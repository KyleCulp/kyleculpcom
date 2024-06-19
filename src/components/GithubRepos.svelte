<!-- src/components/GithubRepos.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import type { Repo } from '$lib/types';
	import GithubRepoCard from './GithubRepoCard.svelte';
	import { fetchRepoSkeleton, fetchReposData } from '$lib/github';

	const CACHE_KEY = 'github_repos';
	const CACHE_TIMESTAMP_KEY = 'github_repos_timestamp';
	const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

	let repos: Repo[] = [];
	let loadingRepos: Repo[] = fetchRepoSkeleton();
	let errorMessage: string;

	onMount(async () => {
		const now = Date.now();
		const cachedRepos = localStorage.getItem(CACHE_KEY);
		const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

		// If the current time minus cached data timestamp is less than cache duration,
		// don't fetch new data, otherwise refresh github repo data
		if (cachedRepos && cachedTimestamp && now - parseInt(cachedTimestamp) < CACHE_DURATION) {
			repos = JSON.parse(cachedRepos) as Repo[];
		} else {
			try {
				repos = await fetchReposData();
				localStorage.setItem(CACHE_KEY, JSON.stringify(repos));
				localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
			} catch (err) {
				errorMessage = (err as Error).message;
			}
		}
	});
</script>

<div class="mx-auto w-full py-2 lg:w-4/5">
	<div class="flex-col px-4 py-6 dark:bg-githubGray-dark sm:p-8">
		<h2 class="mb-2 text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
			Open Source Projects & Libraries
		</h2>
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
