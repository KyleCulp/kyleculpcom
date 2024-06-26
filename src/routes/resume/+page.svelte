<script>
	let pdfUrl = '/KyleCulpSoftwareEngineerResume.pdf';
	let resumeWebp = '/KyleCulpSoftwareEngineerResume-light.webp';
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Kyle Culp's Resume" />
</svelte:head>
<div class="flex flex-col items-center justify-center">
	<a href={pdfUrl} target="_blank" class="mx-auto mb-3 mt-3">
		<button
			type="button"
			class="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
			>View Resume PDF</button
		>
	</a>

	<img src={resumeWebp} alt="Kyle Culp Resume" class=" block h-3/4 w-full md:w-1/2" />
</div>
