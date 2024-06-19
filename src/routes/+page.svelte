<script lang="ts">
	// import Scene from '$lib/Scene.svelte';
	// import { Canvas } from '@threlte/core';
	// import GitHubRepo from '$lib/GitHubRepo.svelte';
	import GithubRepos from '$components/GithubRepos.svelte';
</script>

<!-- <div><Canvas><Scene></Scene></Canvas></div> -->

<svelte:head>
	<title>Kyle Culp</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<main>
		<GithubRepos />
	</main>
</section>

<style>
</style>
