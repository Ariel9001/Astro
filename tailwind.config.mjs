/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cian-green-800': '#0a5258',
				'cian-green-700': '#0e6f77',
				'cian-green-600': '#0f7c85',
			},
		},
	},
	plugins: [],
}
