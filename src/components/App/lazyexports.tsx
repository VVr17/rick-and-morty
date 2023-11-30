import React from 'react';

export const CharactersPage: React.FC = React.lazy(
  () => import('pages/CharactersPage')
);
export const CharacterDetailsPage: React.FC = React.lazy(
  () => import('pages/CharacterDetailsPage')
);
export const EpisodesPage: React.FC = React.lazy(
  () => import('pages/EpisodesPage')
);
export const EpisodeDetailsPage: React.FC = React.lazy(
  () => import('pages/EpisodeDetailsPage')
);
export const Home: React.FC = React.lazy(() => import('pages/Home'));
export const LocationPage: React.FC = React.lazy(
  () => import('pages/LocationPage')
);
export const LocationDetailsPage: React.FC = React.lazy(
  () => import('pages/LocationDetailsPage')
);
export const Layout: React.FC = React.lazy(() => import('components/Layout'));
