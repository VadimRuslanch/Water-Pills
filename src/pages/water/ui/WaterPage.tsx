import { useWaterStore } from "../../../entities/water/model";

export function WaterPage() {
  const goal = useWaterStore((state) => state.goal);
  const entries = useWaterStore((state) => state.entries);
  const addWater = useWaterStore((state) => state.addWater);

  const amount = entries.reduce((total, entry) => total + entry.amount, 0);
  const remaining = Math.max(goal - amount, 0);
  const percent = Math.min((amount / goal) * 100, 100);

  return (
    <div className="water-page">
      <header className="water-page-header">
        <h1>Вода</h1>
        <p className="date">Цель {goal} мл в день</p>
      </header>

      <div className="water-page-card">
        <div className="water-page-row">
          <span className="water-page-amount">{amount} мл</span>
          <span className="water-page-remaining">осталось {remaining} мл</span>
        </div>

        <div className="water-page-progress">
          <div
            className="water-page-progress-fill"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="water-page-buttons">
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
      </div>
    </div>
  );
}
