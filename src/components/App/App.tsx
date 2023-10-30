import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Character, Home, Layout } from './lazyexports';

const App = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="character" element={<Character />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
