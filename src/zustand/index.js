
import create from 'zustand'

export const useStore = create(set => ({
    auth: false,
    setAuth: (auth) => set({ auth })
  }))