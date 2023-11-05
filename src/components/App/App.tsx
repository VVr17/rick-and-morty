import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { Character, Home, Layout } from './lazyexports';
import Loader from 'components/common/Loader';

const App = () => {
  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:characterId" element={<Character />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
