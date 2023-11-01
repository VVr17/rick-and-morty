import React, { useEffect } from 'react';
import Hero from 'components/Hero';

import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { fetchCharacters } from 'app/redux/characters/charactersOperations';

import Characters from 'components/Characters';
import { selectCharacters } from 'app/redux/characters/selectors';
import Loader from 'components/common/Loader';
import { useSearchParams } from 'react-router-dom';
import { retrieveSearchParams } from 'utils/retrieveSearchParams';
import { useQuery } from '@apollo/client';
import { FETCH_EPISODES } from 'services/episodeService/queries';

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, characterList } = useAppSelector(selectCharacters);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = retrieveSearchParams(searchParams);

    dispatch(fetchCharacters(query));
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Hero />
      {characterList && <Characters />}
    </>
  );
};

export default Home;
