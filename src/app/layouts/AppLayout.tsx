import { Outlet } from 'react-router-dom'

import { BottomNavigation } from '../../widgets/bottom-navigation'

export function AppLayout() {
  return (
    <div className="app-shell">
      <main className="app-content">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  )
}
