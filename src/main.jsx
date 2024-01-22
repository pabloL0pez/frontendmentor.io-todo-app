import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'contexts/ThemeContext';
import { ToDoProvider } from 'contexts/ToDoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToDoProvider>
        <App />
      </ToDoProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
