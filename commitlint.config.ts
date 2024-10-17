import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',
	parserPreset: 'conventional-changelog-atom',
	rules: {
		'scope-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'perf',
				'test',
				'build',
				'ci',
				'chore',
				'revert',
			],
		],
	},
}

export default Configuration
