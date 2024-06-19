import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.js'],
	plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Customize colors to match GitHub's dark theme
				githubGray: {
					DEFAULT: '#1e1e1e',
					dark: '#161b22',
					light: '#21262d',
				},
				githubBlue: {
					DEFAULT: '#0366d6',
					light: '#4f92ff',
				},
				githubGreen: {
					DEFAULT: '#6aef9e',
				},
			},
		},
	},

} as Config;
