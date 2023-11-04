import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  fetchCharacters,
  fetchCharactersByEpisode,
} from 'app/redux/characters/charactersOperations';
import { retrieveSearchParams } from 'utils/filter/retrieveSearchParams';
import { selectCharacters } from 'app/redux/characters/selectors';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks';

import Characters from 'components/Characters';
import Hero from 'components/Hero';
import Loader from 'components/common/Loader';
import { getQueriesByProperty } from 'utils/getQueriesByProperty';

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(selectCharacters);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = retrieveSearchParams(searchParams);
    const { properties, ...query } = getQueriesByProperty(searchQuery);

    if (properties.includes('episode') && query.episodeQuery.episode) {
      dispatch(fetchCharactersByEpisode(query));
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
