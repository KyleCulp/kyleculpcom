<script lang="ts">
	import GithubColors from '$lib/GithubColors';
	import type { Repo } from '$lib/types';
	export let repo: Repo;
	let color: string = '#1e1e1e';

	if (repo.language in GithubColors) color = GithubColors[repo.language];
</script>

<div class="w-full p-4 md:w-1/2">
	<div
		class="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 dark:border-gray-700"
	>
		<div class="p-6">
			<div class="mb-1 flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					class="mr-2 fill-current text-gray-400 dark:text-gray-500"
				>
					<path
						d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.251 3.251 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A2.989 2.989 0 0 1 6 15h13.5Z"
					></path>
					<path
						d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2v-5.01Z"
					></path>
				</svg>
				<a href={repo.html_url} class="text-base font-medium text-indigo-600 dark:text-indigo-400">
					{repo.name}
				</a>
			</div>
			<p class="mb-3 text-xs text-gray-600 dark:text-gray-300">{repo.description}</p>
			<div class="flex flex-wrap items-center">
				<div class="mt-2 flex items-center">
					<span class="mr-2 h-3 w-3 rounded-full" style="background-color: {color};"></span>
					<span class="text-sm text-gray-400">{repo.language}</span>
				</div>
				<span
					class="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 dark:border-gray-700"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="mr-1 h-4 w-4"
						viewBox="0 0 24 24"
					>
						<path d="M6 3v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3"></path>
						<path d="M10 9h4"></path>
						<path d="M10 6h4"></path>
					</svg>
					{repo.forks_count}
				</span>
				<span
					class="inline-flex items-center text-sm leading-none text-gray-400 dark:text-gray-300"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="mr-1 h-4 w-4"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
						></path>
					</svg>
					{repo.stargazers_count}
				</span>
			</div>
		</div>
	</div>
</div>

<style>
	/* Add any additional styling here if needed */
</style>
