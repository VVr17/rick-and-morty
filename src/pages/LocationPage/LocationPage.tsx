import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchAllLocations, selectLocations } from 'app/redux/locations';
import { retrieveSearchParams } from 'utils/filter';
import { topScroll } from 'utils';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks';

import { ButtonUp } from 'components/common/buttons';
import Entities from 'components/Entities';
import Loader from 'components/common/Loader';

const LocationPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(selectLocations);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = retrieveSearchParams(searchParams);
    topScroll();

    dispatch(fetchAllLocations(query));
  }, [searchParams]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Entities />
      <ButtonUp />
    </>
  );
};

export default LocationPage;
