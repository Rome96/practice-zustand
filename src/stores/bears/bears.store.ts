import { create } from 'zustand'

interface Bear {
  id: number;
  name: string;
}

interface BearStore {
  blackBears: number;
  polarBears: number;
  pandasBears: number;

  bears: Bear[];

  increaseBlackBears: (by: number) => void;
  decreaseBlackBears: (by: number) => void;

  increasePolarBears: (by: number) => void;
  decreasePolarBears: (by: number) => void;

  increasePandasBears: (by: number) => void;
  decreasePandasBears: (by: number) => void;

  doNothing: () => void;
}

const initialState = {
  blackBears: 10,
  polarBears: 20,
  pandasBears: 30,
  bears: [{id: 1, name: 'Oso Negro'}, {id: 2, name: 'Oso Polar'}, {id: 3, name: 'Oso Panda'}],
}

export const useBearStore = create<BearStore>()((set) => ({
  ...initialState,
  increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
  decreaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears - by })),

  increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
  decreasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears - by })),

  increasePandasBears: (by: number) => set((state) => ({ pandasBears: state.pandasBears + by })),
  decreasePandasBears: (by: number) => set((state) => ({ pandasBears: state.pandasBears - by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),
}))
