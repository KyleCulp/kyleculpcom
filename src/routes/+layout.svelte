<script>
	import '../app.css';
	import Header from '$components/Header.svelte';
	import './styles.css';
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
</script>

<div class="relative">
	<Header></Header>
	<main class="w-full">
		<slot></slot>
	</main>
</div>

<style>
	main {
		margin-top: 70px;
	}
	@media (max-width: 768px) {
		main {
			margin-top: 60px;
		}
	}
</style>
