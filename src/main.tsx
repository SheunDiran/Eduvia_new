import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initTheme } from './utils/theme';
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker for offline support and mobile installability
if (typeof window !== 'undefined') {
  const updateSW = registerSW({
    onNeedRefresh() {
      updateSW(true);
    },
    onOfflineReady() {
      console.log('Eduvia PWA ready for offline usage');
    },
  });
}

// Ensure dark/light mode class is applied immediately on load
initTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
