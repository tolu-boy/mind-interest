
import create from 'zustand'

export const useStore = create(set => ({
  token: localStorage.getItem('token'),
  auth: localStorage.getItem('auth') === 'true',

    setAuth: (auth) => set({ auth }),
    setToken: (token) => set({ token }),
    clearToken: () => set({ token:null}),


  }))