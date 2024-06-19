<script>
	import '../app.css';
	import Header from '$components/Header.svelte';
	import './styles.css';
</script>

<div class="relative px-8">
	<Header></Header>
</div>
<div class="app">
	<main>
		<slot></slot>
	</main>
</div>

<style>
	.app {
		margin-top: 70px;
	}
	@media (max-width: 768px) {
		.app {
			margin-top: 60px;
		}
	}
</style>
