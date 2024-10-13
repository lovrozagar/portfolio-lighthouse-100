import { create } from 'zustand'

type SearchCommandStore = {
	open: boolean
	setOpen: (value: boolean) => void
}

const useSearchCommandStore = create<SearchCommandStore>((set) => ({
	open: false,
	setOpen: (value) => set({ open: value }),
}))

export { useSearchCommandStore }
