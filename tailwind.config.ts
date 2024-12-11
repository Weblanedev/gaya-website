import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			container: {
				// center: true
				// padding: '24'
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: 'var(--primary)',
				'primary-0': 'var(--primary-0)',
				'primary-100': 'var(--primary-100)',
				'primary-900': 'var(--primary-900)',
				'gray-0': 'var(--gray-0)',
				'gray-400': 'var(--gray-400)',
				'gray-500': 'var(--gray-500)',
				'gray-600': 'var(--gray-600)',
				'gray-700': 'var(--gray-700)',
				'gray-800': 'var(--gray-800)',
				'gray-900': 'var(--gray-900)',
				'secondary-100': 'var(--secondary-100)',
				'footer-text': 'var(--footer-text)',
				'card-des': 'var(--card-des)',
				'gray-cool': 'var(--gray-cool)',
				'blue-200': 'var(--blue-200)',
				'blue-300': 'var(--blue-300)',
				'blue-400': 'var(--blue-400)',
				'blue-500': 'var(--blue-500)',
				'blue-700': 'var(--blue-700)',
				'blue-800': 'var(--blue-800)',
				'gray-blue-25': 'var(--gray-blue-25)',	
				'gray-blue-50': 'var(--gray-blue-50)',	
				'gray-blue-400': 'var(--gray-blue-400)',	
				'gray-blue-800': 'var(--gray-blue-800)',	
				'sky-blue-25': 'var(--sky-blue-25)',
				'sky-blue-100': 'var(--sky-blue-100)',
				'sky-blue-300': 'var(--sky-blue-300)',
				'sky-blue-400': 'var(--sky-blue-400)',
				'success': 'var(--success)',
			},
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
				// mono: ['var(--font-geist-mono)'],
			  },
			listStyleImage: {
				checkmark: 'url("/icons/checkmark.png") '
			}
		}
	},
	plugins: []
};
export default config;
