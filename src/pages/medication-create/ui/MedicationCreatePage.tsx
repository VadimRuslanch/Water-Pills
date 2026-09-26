import { useState } from "react";

export function MedicationCreatePage() {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="med-create-page">
      <header className="settings-header">
        <h1>Новый препарат</h1>
      </header>

      <div className="settings-card">
        <div className="settings-input-group">
          <label>Название</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="settings-input-group">
          <label>Дозировка</label>
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            placeholder="например: 1 таблетка"
          />
        </div>

        <div className="settings-input-group">
          <label>Время приёма</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button className="med-btn-primary">Сохранить</button>
      </div>
    </div>
  );
}
