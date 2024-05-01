/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'crimson': {
					50: '#fff1f2',
					100: '#ffe0e2',
					200: '#ffc7cb',
					300: '#ff9fa7',
					400: '#ff6874',
					500: '#fa3948',
					600: '#e31727',
					700: '#c31220',
					800: '#a1131e',
					900: '#851720',
					950: '#49060b',
				},
			},
		}
	},
	plugins: [],
}
