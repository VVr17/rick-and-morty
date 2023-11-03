import React, { useEffect } from 'react';
import Hero from 'components/Hero';

import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { fetchCharacters } from 'app/redux/characters/charactersOperations';

import Characters from 'components/Characters';
import { selectCharacters } from 'app/redux/characters/selectors';
import Loader from 'components/common/Loader';
import { useSearchParams } from 'react-router-dom';
import { retrieveSearchParams } from 'utils/filter/retrieveSearchParams';

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, characterList } = useAppSelector(selectCharacters);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = retrieveSearchParams(searchParams);

    dispatch(fetchCharacters(query));
  }, [searchParams]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Hero />
      {characterList && <Characters />}
    </>
  );
};

export default Home;
