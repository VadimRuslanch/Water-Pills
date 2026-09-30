import { create } from "zustand";

export type MedicationIntake = {
  id: string;
  medicationId: string;
  time: string;
  takenAt: string;
};

type MedicationIntakeStore = {
  intakes: MedicationIntake[];
  addIntake: (medicationId: string, time: string) => void;
};

export const useMedicationIntakeStore = create<MedicationIntakeStore>(
  (set) => ({
    intakes: [],
    addIntake: (medicationId, time) =>
      set((state) => ({
        intakes: [
          ...state.intakes,
          {
            id: crypto.randomUUID(),
            medicationId,
            time,
            takenAt: new Date().toISOString(),
          },
        ],
      })),
  }),
);
