import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import App from 'components/App';
import { apolloClient } from 'app/graphql';
import { store } from 'app/redux/store';
import { theme } from './constants/theme';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
