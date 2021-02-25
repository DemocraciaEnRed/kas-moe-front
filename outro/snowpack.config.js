// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components',
		'src/util': '/_util'
	},
	alias: {
		$components: './src/components',
		$util: './src/util'
	}
};
