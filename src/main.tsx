import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Test/>
  </StrictMode>,
)
