import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { NoticesProvider } from './contexts/NoticesContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NoticesProvider>
       <App />
    </NoticesProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();


