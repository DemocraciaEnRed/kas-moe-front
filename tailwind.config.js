const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
	purge: {
		content: [
			"./src/**/*.html",
			"./src/**/*.svelte",
		],
		options: {
			defaultExtractor: (content) => [
				// This is an internal Tailwind function that we're not supposed to be allowed to use
				// So if this stops working, please open an issue at
				// https://github.com/babichjacob/sapper-postcss-template/issues
				// rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		fontFamily: {
			'inter': ['Inter', 'sans-serif'],
			'sand': ['Quicksand', 'sans-serif'],
			'noto': ['Noto Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				'moe-cyan-light': '#ecf4fe',
				'moe-cyan': '#ecf2ff',
				'moe-cyan-dark': '#d2ddff',
				'moe-blue': '#181c8b',
				'moe-blue-light': '#4290f0',
				'moe-blue-dark': '#0a0b38',
				'moe-red': '#ab102c',
				'moe-green': '#57a230',
				'moe-green-light': '#68d684',
				'moe-gray': '#c4c4c4',
				'moe-gray-medium': '#d8d8d8',
				'moe-gray-light': '#d4d4d4',
				'moe-orange': '#f06543',
				'moe-orange-light': '#fef0ec',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
