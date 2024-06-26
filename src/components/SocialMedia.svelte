<script>
	// URLs for each social media profile
	let githubUrl = 'https://github.com/KyleCulp';
	let linkedinUrl = 'https://www.linkedin.com/in/kyle-culp';
	let gmailUrl = 'mailto:me@kyleculp.com';
	let discordUrl = 'https://discord.com/users/YOUR_USER_ID'; // Replace YOUR_USER_ID with your actual Discord user ID
</script>

<div class="mt-8 flex justify-center space-x-4 py-4 text-white">
	<a href={githubUrl} class="social-button github" target="_blank" aria-label="GitHub">
		<i class="bi bi-github"></i>

		<span>KyleCulp</span>
	</a>

	<a href={linkedinUrl} class="social-button linkedin" target="_blank" aria-label="LinkedIn">
		<i class="bi bi-linkedin"></i>

		<span>kyle-culp</span>
	</a>

	<a href={gmailUrl} class="social-button gmail" target="_blank" aria-label="Gmail">
		<i class="bi bi-envelope"></i>
		<span>kyle@kyleculp.com</span>
	</a>

	<a href={discordUrl} class="social-button discord" target="_blank" aria-label="Discord">
		<i class="bi bi-discord"></i>
		<span>kyledculp</span>
	</a>
</div>

<style>
	.social-button {
		@apply flex items-center space-x-2 rounded-lg px-4 py-1.5 text-lg text-white;
		transition: background-color 0.3s;
	}
	.social-button svg {
		@apply h-6 w-6;
	}
	.github {
		@apply bg-gray-800;
	}
	.github:hover {
		@apply bg-gray-900;
	}
	.linkedin {
		@apply bg-blue-700;
	}
	.linkedin:hover {
		@apply bg-blue-800;
	}
	.gmail {
		@apply bg-red-500;
	}
	.gmail:hover {
		@apply bg-red-600;
	}
	.discord {
		@apply bg-blue-600;
	}
	.discord:hover {
		@apply bg-blue-700;
	}
</style>
