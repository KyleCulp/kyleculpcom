<script lang="ts">
	// import Scene from '$lib/Scene.svelte';
	// import { Canvas } from '@threlte/core';
	// import GitHubRepo from '$lib/GitHubRepo.svelte';
	import GithubRepos from '$components/GithubRepos.svelte';
	import SocialMedia from '$components/SocialMedia.svelte';
</script>

<!-- <div><Canvas><Scene></Scene></Canvas></div> -->

<svelte:head>
	<title>Kyle Culp</title>
	<meta name="description" content="Svelte demo app" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
	/>
</svelte:head>

<section class="bg-white dark:bg-githubGray-dark">
	<main>
		<SocialMedia />
		<GithubRepos />
	</main>
</section>

<style>
</style>
