import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null, // Initial user state (null means not logged in)
  isLoggedIn: false, // To track login status
  setUser: (userData) => set({ user: userData, isLoggedIn: true }), // Log in user
  logout: () => set({ user: null, isLoggedIn: false }), // Log out user
  updateUser: (updatedData) => set((state) => ({ user: { ...state.user, ...updatedData } })),
}));

export default useUserStore;
