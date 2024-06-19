<script>
	import { onMount } from 'svelte';

	let pdfUrl = '/KyleCulpSoftwareEngineerResume.pdf';

	let isMobile = false;

	// Function to check if the device is mobile
	onMount(() => {
		// Function to check if the device is mobile
		const checkIfMobile = () => {
			const userAgent = navigator.userAgent || navigator.vendor || window.opera;
			isMobile = /android|iphone|ipad|ipod|iemobile|blackberry|kindle|silk|opera mini/i.test(
				userAgent
			);
		};

		checkIfMobile();
	});
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Kyle Culp's Resume" />
</svelte:head>
<div class="mx-auto flex h-[80%] w-full flex-col p-4 lg:w-3/4">
	{#if isMobile}
		<div
			class=" mb-4 mt-16 flex flex-col rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
			role="alert"
		>
			<span class="font-medium">PDF View on Desktop only!</span>
			<span>Please view the pdf directly on mobile.</span>
		</div>
		<a href={pdfUrl} target="_blank" class="mx-auto">
			<button
				type="button"
				class="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
				>View Resume PDF</button
			>
		</a>
	{:else}
		<iframe
			src="/KyleCulpSoftwareEngineerResume.pdf"
			class="h-screen w-full"
			title="Kyle Culp's Resume"
			frameborder="0"
		/>
	{/if}
</div>
