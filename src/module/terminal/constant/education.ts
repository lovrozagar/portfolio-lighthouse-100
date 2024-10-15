import type { CareerItem } from '@/module/terminal/type/type'

const EDUCATION_CAREER_ITEMS: CareerItem[] = [
	{
		organizationName: 'Zagreb University of Applied Sciences',
		organizationHref: 'https://hivetech.hr/',
		startDate: 'Oct 2019',
		endDate: 'May 2021',
		role: 'Computer Science',
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
		organizationName: 'School of Electrical Engineering',
		organizationHref: undefined,
		startDate: 'Sep 2014',
		endDate: 'May 2019',
		role: 'Computer Technician',
		commitmentType: 'Full-time',
		location: 'Zagreb, Croatia',
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

export { EDUCATION_CAREER_ITEMS }
