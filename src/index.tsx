import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import { apolloClient } from 'app/graphql';
import { globalStyles } from 'styles';
import { router } from 'router';
import { store, persistor } from 'app/redux/store';
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <GlobalStyles styles={globalStyles} />
          </ThemeProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
