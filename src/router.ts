import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        lazy: async () => {
          let Home = await import('./pages/Home');
          return { Component: Home.default };
        },
      },
      {
        path: '/:characterId',
        lazy: async () => {
          let Character = await import('./pages/Character');
          return { Component: Character.default };
        },
      },
    ],
  },
]);
