import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { CircularProgress } from '@mui/material';
import { Character, Home, Layout } from './lazyexports';

const App = () => {
  return (
    <Suspense fallback={<CircularProgress color="success" />}>
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
