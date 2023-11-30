import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchAllEpisodes, selectEpisodes } from 'app/redux/episodes';
import { retrieveSearchParams } from 'utils/filter';
import { topScroll } from 'utils';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks';

import { ButtonUp } from 'components/common/buttons';
import Loader from 'components/common/Loader';
import Entities from 'components/Entities';

const EpisodesPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(selectEpisodes);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = retrieveSearchParams(searchParams);
    topScroll();

    dispatch(fetchAllEpisodes(query));
  }, [searchParams]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Entities />
      <ButtonUp />
    </>
  );
};

export default EpisodesPage;
