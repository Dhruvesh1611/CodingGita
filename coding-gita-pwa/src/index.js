import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// New React 18 rendering API
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(<App />); // Initial render

serviceWorkerRegistration.register({
  onUpdate: registration => {
    if (window.confirm('New version available! Load new version?')) {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
      window.location.reload();
    }
  },
});
