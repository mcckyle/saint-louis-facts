//Filename: main.jsx
//Author: Kyle McColgan
//Date: 28 April 2025
//Description: Contains the main React component for the facts website.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
