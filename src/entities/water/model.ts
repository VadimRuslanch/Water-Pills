import { create } from "zustand";

type WaterStore = {
  goal: number;
  amount: number;
  addWater: (value: number) => void;
};

export const useWaterStore = create<WaterStore>((set) => ({
  goal: 2500,
  amount: 0,
  addWater: (value) => set((state) => ({ amount: state.amount + value })),
}));
