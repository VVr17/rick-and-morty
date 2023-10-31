import React from 'react';
import CharacterList from 'components/CharacterList';
import Hero from 'components/Hero';

import { useAppDispatch } from 'app/redux/hooks';
import { fetchCharacters } from 'app/redux/characters/charactersOperations';

const Home = () => {
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(fetchCharacters({ page: 1, name: 'rick' }));
  };

  return (
    <>
      <Hero />
      <button onClick={handleSearch}>Fetch data</button>
      <CharacterList />
    </>
  );
};

export default Home;
