import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AchievementsProvider } from './components/Achievements.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AchievementsProvider>
      <App />
    </AchievementsProvider>
  </StrictMode>,
)
