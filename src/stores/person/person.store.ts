import { persist } from "zustand/middleware";
import { create, type StateCreator } from "zustand";
// import { customSessionStore } from "../storages/session-storege.storage";
// import { firebaseStorage } from "../storages/firebase.storage";
import { devtools } from "zustand/middleware";
// import { logger } from "../middlewares/logger.middleware";

interface Person {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

type PersonStore = Person & Actions;

const storeAPI: StateCreator<PersonStore, [["zustand/devtools", never]]> = (set) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) => set(({ firstName: value }), false, "setFirstName"),
  setLastName: (value: string) => set(({ lastName: value }), false, "setLastName"),
});

export const usePersonStore = create<PersonStore>()(
  // logger(
  devtools(
    persist(storeAPI, {
      name: "person-storage",
      // storage: customSessionStore
      // storage: firebaseStorage
    })),
  // )
);
