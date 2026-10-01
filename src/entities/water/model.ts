import { create } from "zustand";

export type WaterEntry = {
  id: string;
  amount: number;
  createdAt: string;
};

type WaterStore = {
  goal: number;
  entries: WaterEntry[];
  addWater: (amount: number) => void;
  removeWaterEntry: (id: string) => void;
  setGoal: (goal: number) => void;
};

export const useWaterStore = create<WaterStore>((set) => ({
  goal: 2500,
  entries: [],
  addWater: (amount) =>
    set((state) => ({
      entries: [
        ...state.entries,
        {
          id: crypto.randomUUID(),
          amount,
          createdAt: new Date().toISOString(),
        },
      ],
    })),
  removeWaterEntry: (id) =>
    set((state) => ({
      entries: state.entries.filter((entry) => entry.id !== id),
    })),
  setGoal: (goal) => set({ goal }),
}));