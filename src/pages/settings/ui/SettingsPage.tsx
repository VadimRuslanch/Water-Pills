import { useWaterStore } from "../../../entities/water/model";

export function SettingsPage() {
  const goal = useWaterStore((state) => state.goal);
  const setGoal = useWaterStore((state) => state.setGoal);

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>Настройки</h1>
        <p className="date">Вода, уведомления и интерфейс</p>
      </header>

      <div className="settings-card">
        <h2 className="settings-section-title">Вода</h2>
        <div className="settings-input-row">
          <div className="settings-input-group">
            <label>Дневная цель</label>
            <div className="settings-input-with-suffix">
              <input
                type="number"
                value={goal}
                onChange={(e) => setGoal(Number(e.target.value))}
              />
              <span>мл</span>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-card">
        <h2 className="settings-section-title">Интерфейс</h2>
        <label className="settings-radio-row">
          <input type="radio" name="theme" defaultChecked />
          <span>Системная</span>
        </label>
        <label className="settings-radio-row">
          <input type="radio" name="theme" />
          <span>Светлая</span>
        </label>
        <label className="settings-radio-row">
          <input type="radio" name="theme" />
          <span>Тёмная</span>
        </label>
      </div>
    </div>
  );
}
