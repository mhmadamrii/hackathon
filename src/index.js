import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './components/context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
          <App />
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
