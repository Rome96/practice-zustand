import { create } from "zustand";

interface Bear {
  id: number;
  name: string;
}

interface BearStore {
  blackBears: number;
  polarBears: number;
  pandasBears: number;

  bears: Bear[];

  computed: {
    totalBears: number;
  };

  increaseBlackBears: (by: number) => void;
  decreaseBlackBears: (by: number) => void;

  increasePolarBears: (by: number) => void;
  decreasePolarBears: (by: number) => void;

  increasePandasBears: (by: number) => void;
  decreasePandasBears: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<BearStore>()((set, get) => ({
  blackBears: 10,
  polarBears: 20,
  pandasBears: 3,
  bears: [{ id: 1, name: "Oso #1" }],

  //getter - property computed
  computed: {
    get totalBears() {
      return (
        get().blackBears +
        get().pandasBears +
        get().polarBears +
        get().bears.length
      );
    },
  },

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  decreaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears - by })),

  increasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  decreasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears - by })),

  increasePandasBears: (by: number) =>
    set((state) => ({ pandasBears: state.pandasBears + by })),
  decreasePandasBears: (by: number) =>
    set((state) => ({ pandasBears: state.pandasBears - by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),
  addBear: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}` },
      ],
    })),
  clearBears: () => set({ bears: [] }),
}));
