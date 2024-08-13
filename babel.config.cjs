module.exports = function primaryConfig(api) {
	api.cache(true)

	const presets = [
		[
			"@babel/preset-env", {
				useBuiltIns: 'usage',
				corejs: "3.38",
				targets: {
					node: 'current'
				},
			},
		],
		'@babel/preset-typescript',
	];

	const plugins = [];

	return {
		presets,
		plugins
	}
}
