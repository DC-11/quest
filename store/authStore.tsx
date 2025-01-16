import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create((set) => ({
  token: null,
  user: null,
  setToken: async (token) => {
    await AsyncStorage.setItem("authToken", token);
    set({ token });
  },
  setUser: (user) => set({ user }),
  clearAuth: async () => {
    await AsyncStorage.removeItem("authToken");
    set({ token: null, user: null });
  },
}));

export default useAuthStore;
