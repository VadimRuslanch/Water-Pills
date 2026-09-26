import { useState } from "react";
import { useWaterStore } from "../../../entities/water/model";
import { format } from "date-fns";


export function TodayPage() {
 const entries = useWaterStore((state) => state.entries);
 const amount = entries.reduce((total, entry) => total + entry.amount, 0);
 const goal = useWaterStore((state) => state.goal);
 const addWater = useWaterStore((state) => state.addWater);
 const removeWaterEntry = useWaterStore((state) => state.removeWaterEntry);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [customAmount, setCustomAmount] = useState("");

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
          <button
            className="today-btn today-btn-primary"
            onClick={() => addWater(500)}
          >
            + 500 мл
          </button>
        </div>

        <div className="today-water-actions">
          <button
            className="today-btn today-btn-outline"
            onClick={() => setIsModalOpen(true)}
          >
            Другое
          </button>
          <button className="today-btn today-btn-text">Отменить</button>
        </div>
      </div>
      <div className="today-history">
        <p className="today-history-title">История за сегодня</p>
        <ul className="today-history-list">
          {entries.map((entry) => (
            <li key={entry.id} className="today-history-item">
              <span className="today-history-time">
                {format(new Date(entry.createdAt), "HH:mm")}
              </span>
              <span>{entry.amount} мл</span>
              <button
                className="today-history-remove"
                onClick={() => removeWaterEntry(entry.id)}
              >
                удалить
              </button>
            </li>
          ))}
        </ul>
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
        {isModalOpen && (
          <div className="today-modal-overlay">
            <div className="today-modal">
              <h2>Количество</h2>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="350"
              />
              <span>мл</span>
              <button
                className="today-btn today-btn-primary"
                onClick={() => {
                  addWater(Number(customAmount));
                  setCustomAmount("");
                  setIsModalOpen(false);
                }}
              >
                Добавить
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
