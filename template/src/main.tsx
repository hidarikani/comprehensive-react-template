import React from 'react';
import ReactDOM from 'react-dom/client';
import { defaultTheme, Provider as Spectrum } from '@adobe/react-spectrum';
import { Provider as Redux } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Redux store={store}>
      <Spectrum theme={defaultTheme}>
        <App />
      </Spectrum>
    </Redux>
  </React.StrictMode>
);
