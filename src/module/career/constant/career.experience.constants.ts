import type { CareerItem } from '@/module/career/type/carrer.item.types'

const EXPERIENCE_CARRER_ITEMS: CareerItem[] = [
	{
		organizationName: 'recommend.co',
		organizationHref: 'https://www.recommend.co/',
		startDate: 'Oct 2024',
		endDate: 'Present',
		role: 'Senior Frontend Engineer',
		commitmentType: 'Full-time',
		location: 'Zagreb, Croatia',
		skills: ['TypeScript', 'Next.js', 'React', 'React-Query', 'Zustand', 'GitHub', 'Azure'],
		description: [
			'Rewrote the entire front-end of the TalentYou platform using React, Redux, and i18n, greatly improving performance and user experience.',
			'Containerized the back-end services using Docker and VS Code Dev Containers, reducing the onboarding time for new developers by up to 70%.',
		],
	},
	{
		organizationName: 'HiveTech Ltd.',
		organizationHref: 'https://hivetech.hr/',
		startDate: 'Mar 2022',
		endDate: 'Oct 2024',
		role: 'Frontend Engineer',
		commitmentType: 'Full-time',
		location: 'Zagreb, Croatia',
		skills: [
			'TypeScript',
			'Next.js',
			'React',
			'Redux',
			'RTK Query',
			'Kubernetes',
			'GCP',
			'GitLab',
			'Jira',
		],
		description: [
			'Rewrote the entire front-end of the TalentYou platform using React, Redux, and i18n, greatly improving performance and user experience.',
			'Containerized the back-end services using Docker and VS Code Dev Containers, reducing the onboarding time for new developers by up to 70%.',
		],
	},
	{
		organizationName: 'Freelance',
		organizationHref: undefined,
		startDate: 'Feb 2020',
		endDate: 'Mar 2022',
		role: 'Frontend Developer',
		commitmentType: 'Full-time',
		location: 'Remote',
		skills: [
			'TypeScript',
			'Next.js',
			'React',
			'GraphQL',
			'Apollo Client',
			'AWS',
			'VPS',
			'Serverless',
			'Shopify',
		],
		description: [
			'Rewrote the entire front-end of the TalentYou platform using React, Redux, and i18n, greatly improving performance and user experience.',
			'Containerized the back-end services using Docker and VS Code Dev Containers, reducing the onboarding time for new developers by up to 70%.',
		],
	},
]

export { EXPERIENCE_CARRER_ITEMS }
