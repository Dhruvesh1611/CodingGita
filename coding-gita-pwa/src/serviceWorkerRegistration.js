// src/serviceWorkerRegistration.js
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/custom-service-worker.js')
        .then(registration => {
          console.log('SW registered:', registration);

          // Listen for updates
          registration.onupdatefound = () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.onstatechange = () => {
                if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
                  console.log('New version detected — reloading...');
                  window.location.reload();
                }
              };
            }
          };
        })
        .catch(error => {
          console.error('SW registration failed:', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
