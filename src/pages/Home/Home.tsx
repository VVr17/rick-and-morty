import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  fetchCharacters,
  fetchCharactersByEpisode,
  fetchCharactersByLocation,
  selectCharacters,
} from 'app/redux/characters';
import { retrieveSearchParams } from 'utils/filter';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks';

import Characters from 'components/Characters';
import Hero from 'components/Hero';
import Loader from 'components/common/Loader';
import { topScroll } from 'utils/topScroll';

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
    topScroll();
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
