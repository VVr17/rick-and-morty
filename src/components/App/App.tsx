import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import {
  CharacterDetailsPage,
  CharactersPage,
  EpisodesPage,
  EpisodeDetailsPage,
  Home,
  Layout,
  LocationPage,
  LocationDetailsPage,
} from './lazyexports';
import Loader from 'components/common/Loader';
import { PATHNAME } from 'constants/pathname';

const App = () => {
  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<CharactersPage />} />
          <Route path={PATHNAME.characters} element={<CharactersPage />} />
          <Route
            path={`${PATHNAME.characters}/:characterId`}
            element={<CharacterDetailsPage />}
          />
          <Route path={PATHNAME.episodes} element={<EpisodesPage />} />
          <Route
            path={`${PATHNAME.episodes}/:episodeId`}
            element={<EpisodeDetailsPage />}
          />
          <Route path={PATHNAME.locations} element={<LocationPage />} />
          <Route
            path={`${PATHNAME.locations}/:locationId`}
            element={<LocationDetailsPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
