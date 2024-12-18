import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import { ThemeProvider } from './providers/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <ThemeProvider> */}
      <App />
    {/* </ThemeProvider> */}
  </StrictMode>
)
