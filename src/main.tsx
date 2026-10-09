import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Links shared before the move off hash routing (/basketball/#/skill/x).
const legacy = window.location.hash.match(/^#(\/.*)$/)
if (legacy) {
  window.history.replaceState(null, '', import.meta.env.BASE_URL.replace(/\/$/, '') + legacy[1])
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
