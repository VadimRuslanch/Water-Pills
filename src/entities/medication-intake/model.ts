import { create } from "zustand";

export type MedicationIntake = {
  id: string;
  medicationId: string;
  takenAt: string;
};

type MedicationIntakeStore = {
  intakes: MedicationIntake[];
  addIntake: (medicationId: string) => void;
};

export const useMedicationIntakeStore = create<MedicationIntakeStore>(
  (set) => ({
    intakes: [],
    addIntake: (medicationId) =>
      set((state) => ({
        intakes: [
          ...state.intakes,
          {
            id: crypto.randomUUID(),
            medicationId,
            takenAt: new Date().toISOString(),
          },
        ],
      })),
  }),
);
