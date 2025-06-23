import prettier from 'eslint-config-prettier'
import js from '@eslint/js'
import { includeIgnoreFile } from '@eslint/compat'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import { fileURLToPath } from 'node:url'
import ts from 'typescript-eslint'
import svelteConfig from './svelte.config.js'

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url))

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			'no-undef': 'off', // default
			'@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }], // defaults, fixing eslint issues
			'svelte/no-inner-declarations': ['error', 'functions', { blockScopedFunctions: 'allow' }], // defaults, fixing eslint issues
			'semi': ['error', 'never'], // error when using semicolons
			'max-len': 'off', // remove max length error
			'no-console': 1, // warning on console usage
			'quotes': ['error', 'single'], // error on usage of non-single quotes
			'prefer-template': ['error'], // prefer template to concat strings
			'svelte/no-at-html-tags': 'off',
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		ignores: ['svelte.config.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	}
)
