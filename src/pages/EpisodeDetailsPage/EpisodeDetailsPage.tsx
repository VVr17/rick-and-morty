import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';

import { FETCH_SINGLE_EPISODE } from 'services/episodeService';
import { topScroll } from 'utils';

import Details from 'components/Details';
import Loader from 'components/common/Loader';
import ToastMessage from 'components/common/ToastMessage';

const EpisodeDetailsPage = () => {
  const { episodeId } = useParams();
  const { loading, error, data } = useQuery(FETCH_SINGLE_EPISODE, {
    variables: { id: episodeId },
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
        characters={data?.episode?.characters}
        title={data?.episode?.name || ''}
        subTitle={data?.episode?.episode || ''}
      />

      <ToastMessage
        type="error"
        message={`Episode with ID ${episodeId} has not been found`}
        isOpen={errorIsShown}
        handleClose={() => {
          setErrorIsShown(false);
        }}
      />
    </>
  );
};

export default EpisodeDetailsPage;
