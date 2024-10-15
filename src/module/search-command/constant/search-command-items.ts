import {
	BackpackIcon,
	Crosshair2Icon,
	FileTextIcon,
	GitHubLogoIcon,
	LinkedInLogoIcon,
} from '@radix-ui/react-icons'

const CAREER_ITEMS = [
	{
		value: 'experience',
		label: 'Experience',
		Icon: FileTextIcon,
	},
	{
		value: 'education',
		label: 'Education',
		Icon: BackpackIcon,
	},
	{
		value: 'projects',
		label: 'Projects',
		Icon: Crosshair2Icon,
	},
] as const

const CONTACT_ITEMS = [
	{
		value: 'github',
		label: 'GitHub',
		Icon: GitHubLogoIcon,
	},
	{
		value: 'linkedIn',
		label: 'LinkedIn',
		Icon: LinkedInLogoIcon,
	},
] as const

export { CAREER_ITEMS, CONTACT_ITEMS }
