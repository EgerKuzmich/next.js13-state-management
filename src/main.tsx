import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import duration from 'dayjs/plugin/duration';
import ru from 'dayjs/locale/ru';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import weekday from 'dayjs/plugin/weekday';
import dayjs from 'dayjs';

import App from './App.tsx';

import UiProvider from 'containers/UiProvider/index.tsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthGuard from 'containers/AuthGuard/index.tsx';

const customLocale = {
  ...ru,
  relativeTime: {
    ...ru.relativeTime,
    m: 'м',
    mm: '%dм',
    h: 'час',
    hh: '%dч',
  },
};

dayjs.locale(customLocale);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(weekday);
dayjs.extend(duration);
dayjs.extend(localeData);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <UiProvider>
            <AuthGuard>
              <App />
            </AuthGuard>
          </UiProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </Router>
  </React.StrictMode>,
);
