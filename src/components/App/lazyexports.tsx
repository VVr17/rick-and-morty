import React from 'react';

export const Home: React.FC = React.lazy(() => import('pages/Home'));
export const Character: React.FC = React.lazy(() => import('pages/Character'));
export const Layout: React.FC = React.lazy(() => import('components/Layout'));
