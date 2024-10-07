'use client'

import { useLandscapeMode, useMobileMode } from '@/component/responsive/responsive'
import { NavbarItem } from '@/module/navbar/component/navbar-item'
import { modes } from '@/module/navbar/constant/modes'
import { useNavbar } from '@/module/navbar/hook/use-navbar'
import type { ChildrenProps } from '@/type'
import { Button, IconButton, Stack, Tooltip, useColorScheme } from '@mui/joy'
import { usePathname } from 'next/navigation'
import {
	BsFilePerson,
	BsFilePersonFill,
	BsHouse,
	BsHouseFill,
	BsJournalBookmark,
	BsJournalBookmarkFill,
	BsMoon,
	BsSun,
} from 'react-icons/bs'
import { MdOutlineAutoMode } from 'react-icons/md'

function Navbar(props: ChildrenProps) {
	const { children } = props

	const pathname = usePathname()

	const { mode, setMode } = useColorScheme()

	const bottom = useMobileMode()
	const landscape = useLandscapeMode()

	const horizontal = !landscape && !bottom

	const { navigationRef, hidden } = useNavbar()

	return (
		<>
			<Stack
				ref={navigationRef}
				direction={landscape ? 'column' : 'row'}
				sx={(theme) => ({
					position: 'fixed',
					...(bottom
						? {
								bottom: 0,
								borderTop: `1px solid ${theme.palette.divider}`,
							}
						: {
								top: 0,
							}),
					left: 0,
					gap: 4,
					display: hidden ? 'none' : 'flex',
					alignItems: 'center',
					backgroundColor: `color-mix(in srgb, ${theme.palette.background.body}, transparent 50%)`,
					backdropFilter: 'blur(10px)',
					webkitBackdropFilter: 'blur(10px)',
					zIndex: 1000,
					...(landscape
						? {
								paddingY: '1.5rem',
								height: '100vh',
								width: 'fit-content',
								borderRight: `1px solid ${theme.palette.divider}`,
							}
						: {
								padding: bottom ? '.5rem' : '.5rem 2rem',
								width: '100vw',
								height: 'fit-content',
								borderBottom: bottom ? undefined : `1px solid ${theme.palette.divider}`,
							}),
				})}
			>
				<Stack
					flex={1}
					justifyContent={bottom ? 'space-evenly' : 'flex-start'}
					direction={landscape ? 'column' : 'row'}
					gap={1}
				>
					<NavbarItem
						icon={<BsHouse />}
						selectedIcon={<BsHouseFill />}
						text='Home'
						layout={horizontal ? 'horizontal' : 'vertical'}
						href='/'
						selected={pathname === '/'}
					/>
					<NavbarItem
						icon={<BsJournalBookmark />}
						selectedIcon={<BsJournalBookmarkFill />}
						text='Projects'
						layout={horizontal ? 'horizontal' : 'vertical'}
						href='/projects'
						selected={pathname.startsWith('/projects')}
					/>
					<NavbarItem
						icon={<BsFilePerson />}
						selectedIcon={<BsFilePersonFill />}
						text='Resume'
						layout={horizontal ? 'horizontal' : 'vertical'}
						href='/resume'
						selected={pathname === '/resume'}
					/>
				</Stack>
				{horizontal ? (
					<Button
						variant='plain'
						color='neutral'
						size='lg'
						sx={{
							minHeight: 'fit-content',
							borderRadius: '100vmax',
							padding: '.6rem 1rem',
							transition: 'all 0.2s',
							fontSize: 'var(--joy-fontSize-sm)',
						}}
						onClick={() => {
							if (mode) setMode(modes[(modes.indexOf(mode) + 1) % modes.length])
						}}
						startDecorator={mode === 'light' ? <BsSun /> : <BsMoon />}
					>
						{`${mode === 'system' ? 'System' : mode === 'light' ? 'Light' : 'Dark'} theme`}
					</Button>
				) : (
					<Tooltip
						variant='soft'
						placement='right'
						title={`${mode === 'system' ? 'System' : mode === 'light' ? 'Light' : 'Dark'} theme`}
					>
						<IconButton
							variant='plain'
							color='neutral'
							size='lg'
							sx={{
								transition: 'all 0.2s',
								display: bottom ? 'none' : undefined,
								borderRadius: '100vmax',
								padding: 2,
							}}
							onClick={() => {
								if (mode) setMode(modes[(modes.indexOf(mode) + 1) % modes.length])
							}}
						>
							{mode === 'system' ? (
								<MdOutlineAutoMode />
							) : mode === 'light' ? (
								<BsSun />
							) : (
								<BsMoon />
							)}
						</IconButton>
					</Tooltip>
				)}
			</Stack>
			{children}
		</>
	)
}

export { Navbar }
