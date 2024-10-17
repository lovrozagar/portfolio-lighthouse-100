import {
	BackpackIcon,
	CrosshairIcon,
	GithubIcon,
	LinkedInIcon,
	TextFileIcon,
} from '@/component/icon'

const CAREER_ITEMS = [
	{
		value: 'experience',
		label: 'Experience',
		Icon: TextFileIcon,
	},
	{
		value: 'education',
		label: 'Education',
		Icon: BackpackIcon,
	},
	{
		value: 'projects',
		label: 'Projects',
		Icon: CrosshairIcon,
	},
] as const

const CONTACT_ITEMS = [
	{
		value: 'github',
		label: 'GitHub',
		Icon: GithubIcon,
	},
	{
		value: 'linkedIn',
		label: 'LinkedIn',
		Icon: LinkedInIcon,
	},
] as const

export { CAREER_ITEMS, CONTACT_ITEMS }
