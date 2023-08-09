module.exports = {
	extends: [
		'eslint-config-kentcdodds',
		'eslint-config-kentcdodds/jest',
		'eslint-config-kentcdodds/jsx-a11y',
		'eslint-config-kentcdodds/react',
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
		ecmaVersion: 2022,
	},
}
