import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMedicationStore } from "../../../entities/medication/model";


export function MedicationCreatePage() {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [times, setTimes] = useState<string[]>([]);
  const [newTime, setNewTime] = useState("");
  function addTime() {
    if (newTime && !times.includes(newTime)) {
      setTimes([...times, newTime]);
      setNewTime("");
    }
  }

  function removeTime(timeToRemove: string) {
    setTimes(times.filter((t) => t !== timeToRemove));
  }
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  function toggleDay(day: number) {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  }

  const addMedication = useMedicationStore((state) => state.addMedication);
  const navigate = useNavigate();

  const handleSave = () => {
    addMedication({ name, dosage, times, daysOfWeek: selectedDays });
    navigate("/medications");
  };
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
          <label>Дни недели</label>
          <div className="days-row">
            {[
              { value: 1, label: "Пн" },
              { value: 2, label: "Вт" },
              { value: 3, label: "Ср" },
              { value: 4, label: "Чт" },
              { value: 5, label: "Пт" },
              { value: 6, label: "Сб" },
              { value: 0, label: "Вс" },
            ].map((day) => (
              <button
                key={day.value}
                type="button"
                className={
                  selectedDays.includes(day.value)
                    ? "day-btn day-btn-active"
                    : "day-btn"
                }
                onClick={() => toggleDay(day.value)}
              >
                {day.label}
              </button>
            ))}
          </div>
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
          <div className="times-row">
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            />
            <button type="button" className="time-add-btn" onClick={addTime}>
              + Добавить время
            </button>
          </div>

          {times.length > 0 && (
            <div className="times-list">
              {times.map((t) => (
                <span key={t} className="time-chip">
                  {t}
                  <button type="button" onClick={() => removeTime(t)}>
                    ✕
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <button className="med-btn-primary" onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
}
