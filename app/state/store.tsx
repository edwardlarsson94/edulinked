import { create } from 'zustand'
import { LoginState } from '../models/interface/auth/login'

export const useStore = create<LoginState>((set) => ({
  showLogin: false,
  updateShowLogin: (newShowLogin:boolean) => set({ showLogin: newShowLogin }),
  isAuthenticated: false,
  updateIsAuthenticated: (newIsAuthenticated:boolean) => set({ isAuthenticated: newIsAuthenticated }),
}))

