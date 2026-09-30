import { create } from "zustand";

export type Medication = {
  id: string;
  name: string;
  dosage: string;
  time: string;
  daysOfWeek: number[];
};
type MedicationStore = {
  medications: Medication[];
  addMedication: (data: Omit<Medication, "id">) => void;
};

export const useMedicationStore = create<MedicationStore>((set) => ({
  medications: [],
  addMedication: (data) =>
    set((state) => ({
      medications: [...state.medications, { id: crypto.randomUUID(), ...data }],
    })),
}));
