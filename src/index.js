import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import ModalProvider from './Features/ModalContext';
import LogedProvider from './Features/LogContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  refetchOnWindowFocus: false,
})
root.render(
  <LogedProvider>
    <ModalProvider>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </ModalProvider>
  </LogedProvider>
);

reportWebVitals();
