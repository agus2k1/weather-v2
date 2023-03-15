import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherProvider } from './context/WeatherContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
