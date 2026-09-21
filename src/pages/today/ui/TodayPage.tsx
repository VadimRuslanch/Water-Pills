import { useWaterStore } from '../../../entities/water/model'

export function TodayPage() {
  const amount = useWaterStore((state) => state.amount)
  const goal = useWaterStore((state) => state.goal)
  const addWater = useWaterStore((state) => state.addWater)

  return (
    <div className="today-card">
      <header className="today-header">
        <h1>Сегодня</h1>
        <p className="date">3 Сентября</p>
      </header>

      <div>
        <div className="today-section-header">
          <span className="today-section-title">Вода</span>
          <span className="today-percent">0%</span>
        </div>

        <div className="today-circle-wrap">
          <svg className="today-circle" viewBox="0 0 200 200">
            <circle className="today-circle-bg" cx="100" cy="100" r="93" />
          </svg>
          <div className="today-circle-text">
            <span className="today-amount">{amount}</span>
            <span className="today-total">из {goal} мл</span>
            <span className="today-left">осталось 2500 мл</span>
          </div>
        </div>

        <div className="today-water-buttons">
          <button
            className="today-btn today-btn-primary"
            onClick={() => addWater(250)}
          >
            + 250 мл
          </button>
          <button className="today-btn today-btn-primary">+ 500 мл</button>
        </div>

        <div className="today-water-actions">
          <button className="today-btn today-btn-outline">Другое</button>
          <button className="today-btn today-btn-text">Отменить</button>
        </div>
      </div>

      <div>
        <div className="today-section-header">
          <span className="today-section-title">Таблетки на сегодня</span>
          <span className="today-count">0 / 3</span>
        </div>
        <ul className="today-pills-list">
          <li className="today-pill-item">
            <div className="today-pill-info">
              <span className="today-pill-time">09:00</span>
              <div className="today-pill-text">
                <span className="today-pill-name">Витамин D</span>
                <span className="today-pill-dose">1 таблетка</span>
              </div>
            </div>
            <div className="today-pill-actions">
              <button className="today-btn-ghost">
                <svg
                  className="today-btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" strokeLinecap="round" />
                  <path
                    d="M12 7v5l3 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Отложить
              </button>
              <button className="today-btn-small">
                <svg
                  className="today-btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M4 12l5 5L20 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Принял
              </button>
            </div>
          </li>

          <li className="today-pill-item">
            <div className="today-pill-info">
              <span className="today-pill-time">14:00</span>
              <div className="today-pill-text">
                <span className="today-pill-name">Магний</span>
                <span className="today-pill-dose">1 таблетка</span>
              </div>
            </div>
            <div className="today-pill-actions">
              <button className="today-btn-ghost">
                <svg
                  className="today-btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" strokeLinecap="round" />
                  <path
                    d="M12 7v5l3 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Отложить
              </button>
              <button className="today-btn-small">
                <svg
                  className="today-btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M4 12l5 5L20 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Принял
              </button>
            </div>
          </li>

          <li className="today-pill-item">
            <div className="today-pill-info">
              <span className="today-pill-time">21:00</span>
              <div className="today-pill-text">
                <span className="today-pill-name">Магний</span>
                <span className="today-pill-dose">1 таблетка</span>
              </div>
            </div>
            <div className="today-pill-actions">
              <button className="today-btn-ghost">
                <svg
                  className="today-btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" strokeLinecap="round" />
                  <path
                    d="M12 7v5l3 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Отложить
              </button>
              <button className="today-btn-small">
                <svg
                  className="today-btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M4 12l5 5L20 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Принял
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
