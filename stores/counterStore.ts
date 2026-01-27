import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterStore = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>()(
  persist(
    (set) => ({
      counter: 0,
      increment: () => set((state) => ({ counter: state.counter + 1 })),
      decrement: () => set((state) => ({ counter: state.counter - 1 })),
    }),
    {
      name: "counter",
    },
  ),
);
