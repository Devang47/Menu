import create from 'zustand'

// Extend this store if you need!

export interface AppStore {
  fontsLoaded: boolean
  isLoading: boolean
  setFontsLoaded: (fontsLoaded: boolean) => void
}

export const useAppStore = create<AppStore>((set) => ({
  fontsLoaded: false,
  isLoading: false,
  setFontsLoaded: (fontsLoaded: boolean) => set((s) => ({ ...s, fontsLoaded }))
}))
