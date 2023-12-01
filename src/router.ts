import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      let Layout = await import('./components/Layout');
      return { Component: Layout.default };
    },
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
