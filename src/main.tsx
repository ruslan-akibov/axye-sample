import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('No root')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
