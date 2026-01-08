import React from 'react';

import { createRoot } from 'react-dom/client';

import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './App';
import { reportWebVitals } from './reportWebVitals';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') return;

  const { worker } = await import('./mocks/browser');

  return worker.start({
    onUnhandledRequest: 'warn',
  });
}
const queryClient = new QueryClient();

enableMocking().then(() => {
  const root = createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>,
  );
});

reportWebVitals();
