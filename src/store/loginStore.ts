import create from "zustand";
import { persist } from "zustand/middleware";

interface LoginState {
  jwt: string;
  setJwt: (jwt: string) => void;
}

const useLoginStore = create<LoginState>(
  persist(
    (set) => ({
      jwt: "",
      setJwt: (jwt) =>
        set((state) => ({
          ...state,
          jwt,
        })),
    }),
    {
      name: "jwt-storage",
      getStorage: () => sessionStorage,
    }
  )
);

export default useLoginStore;
