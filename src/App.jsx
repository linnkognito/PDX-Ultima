import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Guides from './pages/Guides';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Places from './pages/Places';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#ddd6fe',
            color: '#2e1065',
            boxShadow: '0 0 20px #c4b5fd',
          },
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='dashboard' />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='guides' element={<Guides />} />
            <Route path='places' element={<Places />} />
            <Route path='settings' element={<Settings />} />
          </Route>

          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
