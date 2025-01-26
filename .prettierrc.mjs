/** @type {import("prettier").Config} */
export default {
	// Plugins
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	// Options
	singleQuote: true,
	useTabs: true,
	// Overrides
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
