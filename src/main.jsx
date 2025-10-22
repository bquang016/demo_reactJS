import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Import component App
import './index.css'       // Import CSS toàn cục

// Tìm đến thẻ <div id="root"> và gắn component <App> vào đó
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)