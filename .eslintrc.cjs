module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname
	},
	ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'tailwind.config.js', 'postcss.config.js'],
	plugins: ['react'],
	rules: {
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off'
	}
}
