import { NavLink } from 'react-router-dom'

const navigationItems = [
  { to: '/', label: 'Сегодня', end: true },
  { to: '/medications', label: 'Таблетки' },
  { to: '/water', label: 'Вода' },
  { to: '/settings', label: 'Настройки' },
]

export function BottomNavigation() {
  return (
    <nav className="bottom-navigation" aria-label="Основная навигация">
      {navigationItems.map(({ to, label, end }) => (
        <NavLink
          className={({ isActive }) =>
            [
              'bottom-navigation__link',
              isActive && 'bottom-navigation__link--active',
            ]
              .filter(Boolean)
              .join(' ')
          }
          end={end}
          key={to}
          to={to}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
