import { Link } from "react-router-dom";
import { useMedicationStore } from "../../../entities/medication/model";

export function MedicationsPage() {
  const medications = useMedicationStore((state) => state.medications);

  return (
    <div className="med-page">
      <header className="med-header">
        <h1>Мои препараты</h1>
        <p className="date">
          {medications.length === 0
            ? "Препаратов пока нет"
            : `Активных: ${medications.length}`}
        </p>
      </header>

      <ul className="med-list">
        {medications.map((medication) => (
          <li key={medication.id} className="med-item">
            <div className="med-info">
              <span className="med-name">{medication.name}</span>
              <span className="med-detail">
                {medication.dosage} · {medication.time}
              </span>
            </div>
            <svg
              className="med-chevron"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M6 9l6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        ))}
      </ul>

      <Link to="/medications/create" className="med-btn-primary">
        <svg
          className="med-btn-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            d="M12 5v14M5 12h14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Добавить препарат
      </Link>
    </div>
  );
}
