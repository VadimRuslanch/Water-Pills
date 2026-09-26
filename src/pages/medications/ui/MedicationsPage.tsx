export function MedicationsPage() {
  return (
    <div className="med-page">
      <header className="med-header">
        <h1>Мои препараты</h1>
        <p className="date">2 активных</p>
      </header>

      <ul className="med-list">
        <li className="med-item">
          <div className="med-info">
            <span className="med-name">Витамин D</span>
            <span className="med-detail">1 таблетка · 09:00</span>
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

        <li className="med-item">
          <div className="med-info">
            <span className="med-name">Магний</span>
            <span className="med-detail">1 таблетка · 14:00, 21:00</span>
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
      </ul>

      <button className="med-btn-primary">
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
      </button>
    </div>
  );
}
