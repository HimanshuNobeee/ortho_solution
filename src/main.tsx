import { AppThemeProvider } from './themes/AppThemeProvider';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import React from 'react';
import App from './App';
import './main.css';
import { BookingProvider } from './context/BookingContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
);
