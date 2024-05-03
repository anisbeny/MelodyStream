/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		  },
		
		  fontFamily: {
			title: ['Fraunces', 'sans-serif'],
			content: ['Sora', 'sans-serif'],
		  },
		extend: {
			backgroundImage: {
				'custom-gradient':'linear-gradient(to bottom, rgba(0, 0, 0, 0.88) 0%,rgba(126, 0, 198, 0.74) 100%)'
			},
		},
	},
	plugins: [],
}
