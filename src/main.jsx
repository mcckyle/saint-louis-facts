//Filename: main.jsx
//Author: Kyle McColgan
//Date: 04 July 2025
//Description: This file contains the main React component for the Saint Louis city facts website.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
