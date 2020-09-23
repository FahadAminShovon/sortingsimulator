module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb-base',
		'prettier',
		'plugin:import/react',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-console': 'warn',
		'no-unused-vars': 'warn',
		'no-shadow': 'off',
		'no-tabs': 'off',
		indent: ['off', 'tab', {
			SwitchCase: 1
		}],
		'eol-last': 'warn',
		'arrow-parens': 'warn',
		'import/no-unresolved': 'off',
		'import/extentions': 'off',
		'func-name': 'off',
		'import/newline-after-import': 'warn',
		'import/prefer-default-export': 'off',
		'no-plusplus': 'off',
		
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},
	},
};