import { Navigate, createBrowserRouter } from 'react-router-dom'

import { MedicationsPage } from '../pages/medications'
import { SettingsPage } from '../pages/settings'
import { TodayPage } from '../pages/today'
import { WaterPage } from '../pages/water'
import { AppLayout } from './layouts/AppLayout'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <TodayPage /> },
      { path: 'medications', element: <MedicationsPage /> },
      { path: 'water', element: <WaterPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
