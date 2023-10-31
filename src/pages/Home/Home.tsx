import React, { useEffect } from 'react';
import Hero from 'components/Hero';

import { useAppDispatch } from 'app/redux/hooks';
import { fetchCharacters } from 'app/redux/characters/charactersOperations';

import Characters from 'components/Characters';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1, name: '' }));
  }, []);

  return (
    <>
      <Hero />
      <Characters />
    </>
  );
};

export default Home;
