import { useMobileMode } from '@/component/responsive/responsive'
import { Button, Stack, Typography } from '@mui/joy'
import Link from 'next/link'

type NavbarItemProps = {
	href: string
	text: string
	icon: JSX.Element
	selected?: boolean
	selectedIcon?: JSX.Element
	layout?: 'vertical' | 'horizontal'
}

function NavbarItem(props: NavbarItemProps) {
	const { href, text, icon, selected, selectedIcon, layout = 'vertical' } = props

	const mobile = useMobileMode()

	return layout === 'vertical' ? (
		<Stack
			component={Link}
			href={href}
			alignItems='center'
			gap={1}
			sx={{
				cursor: 'pointer',
				borderRadius: '0.5rem',
				fontSize: '1.3rem',
				paddingX: '1rem',
				textDecoration: 'none',
			}}
		>
			<Button
				color='neutral'
				variant={selected ? 'solid' : 'plain'}
				sx={(theme) => ({
					transition: 'all 0.2s',
					padding: '0.3rem 1.1rem',
					borderRadius: '100vmax',
					minHeight: 'fit-content',
					fontSize: 'inherit',
					'& > svg': {
						transition: 'all 0.2s',
					},
					'&:hover > svg': {
						transform: 'scale(1.05)',
					},
					...(selected
						? {
								backgroundColor: theme.palette.text.primary,
								color: selected ? theme.palette.background.body : theme.palette.text.primary,
								'&:hover, &:active': {
									backgroundColor: mobile
										? theme.palette.text.primary
										: theme.palette.text.secondary,
									color: theme.palette.background.body,
								},
							}
						: {}),
				})}
			>
				{selected ? selectedIcon || icon : icon}
			</Button>
			<Typography level='body-xs' fontWeight='700' textColor='text.primary'>
				{text}
			</Typography>
		</Stack>
	) : (
		<Button
			component={Link}
			href={href}
			color='neutral'
			variant={selected ? 'solid' : 'plain'}
			sx={(theme) => ({
				minHeight: 'fit-content',
				borderRadius: '100vmax',
				padding: '.6rem 1rem',
				transition: 'all 0.2s',
				'& > svg': {
					transition: 'all 0.2s',
				},
				'&:hover > svg': {
					transform: 'scale(1.05)',
				},
				...(selected
					? {
							backgroundColor: theme.palette.text.primary,
							color: selected ? theme.palette.background.body : theme.palette.text.primary,
							'&:hover': {
								backgroundColor: mobile ? undefined : theme.palette.text.secondary,
								color: theme.palette.background.body,
							},
						}
					: {}),
			})}
			startDecorator={selected ? selectedIcon || icon : icon}
		>
			{text}
		</Button>
	)
}

export { NavbarItem }
