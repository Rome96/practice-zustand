import { persist } from "zustand/middleware";
import { create, type StateCreator } from "zustand";
import { customSessionStore } from "../storages/session-storege.storage";

interface Person {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

type PersonStore = Person & Actions;

const storeAPI: StateCreator<PersonStore> = (set) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) => set((state) => ({ firstName: value })),
  setLastName: (value: string) => set((state) => ({ lastName: value })),
});



export const usePersonStore = create<PersonStore>()(
  persist(storeAPI, {
    name: "person-storage",
    storage: customSessionStore
  }),
);
