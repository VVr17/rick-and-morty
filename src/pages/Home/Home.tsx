import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  fetchCharacters,
  fetchCharactersByEpisode,
  fetchCharactersByLocation,
} from 'app/redux/characters/charactersOperations';
import { retrieveSearchParams } from 'utils/filter/retrieveSearchParams';
import { selectCharacters } from 'app/redux/characters/selectors';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks';

import Characters from 'components/Characters';
import Hero from 'components/Hero';
import Loader from 'components/common/Loader';

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(selectCharacters);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = retrieveSearchParams(searchParams);

    if (query.property.includes('episode')) {
      dispatch(fetchCharactersByEpisode(query));
      return;
    }

    if (query.property.includes('location')) {
      dispatch(fetchCharactersByLocation(query));
      return;
    }

    dispatch(fetchCharacters(query));
  }, [searchParams]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Hero />
      <Characters />
    </>
  );
};

export default Home;
