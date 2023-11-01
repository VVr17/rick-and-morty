import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import App from 'components/App';
import { apolloClient } from 'app/graphql';
import { globalStyles } from 'styles/styles';
import { store } from 'app/redux/store';
import { theme } from './constants/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

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
            <GlobalStyles styles={globalStyles} />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
