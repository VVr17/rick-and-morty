import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';

import { FETCH_SINGLE_LOCATION } from 'services/locationService';
import { topScroll } from 'utils';

import Details from 'components/Details';
import Loader from 'components/common/Loader';
import ToastMessage from 'components/common/ToastMessage';

const LocationDetailsPage = () => {
  const { locationId } = useParams();
  const { loading, error, data } = useQuery(FETCH_SINGLE_LOCATION, {
    variables: { id: locationId },
  });

  const [errorIsShown, setErrorIsShown] = useState<boolean>(!!error);

  topScroll();

  useEffect(() => {
    setErrorIsShown(!!error);
  }, [error]);

  return (
    <>
      <Loader isLoading={loading} />
      <Details
        characters={data?.location?.residents}
        title={data?.location?.name || ''}
        subTitle={data?.location?.type || ''}
      />

      <ToastMessage
        type="error"
        message={`Location with ID ${locationId} has not been found`}
        isOpen={errorIsShown}
        handleClose={() => {
          setErrorIsShown(false);
        }}
      />
    </>
  );
};

export default LocationDetailsPage;
