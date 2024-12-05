import { createJSONStorage, StateStorage } from "zustand/middleware";

const firebaseUrl = 'https://zustand-storage-e2084-default-rtdb.firebaseio.com/zustand';

export const firebaseStoreApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    const response = await fetch(`${firebaseUrl}/${name}.json`).then(res => res.json())
    return JSON.stringify(response);
  },
  setItem: async function (name: string, value: string): Promise<void> {
    const response = await fetch(`${firebaseUrl}/${name}.json`, {
      method: 'PUT',
        body: value
      }).then(res => res.json())
    console.log(response)

  },
  removeItem: function (name: string): void | Promise<void> {
    console.log("removeItem.", name);
  },
};

export const firebaseStorage = createJSONStorage(() => firebaseStoreApi)