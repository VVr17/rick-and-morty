import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';

import { FETCH_SINGLE_CHARACTER } from 'services/characterService';
import { topScroll } from 'utils';

import CharacterDetails from 'components/CharacterDetails';
import Hero from 'components/Hero';
import Loader from 'components/common/Loader';
import ToastMessage from 'components/common/ToastMessage';

const Character = () => {
  const { characterId } = useParams();
  const { loading, error, data } = useQuery(FETCH_SINGLE_CHARACTER, {
    variables: { id: characterId },
  });
  const [errorIsShown, setErrorIsShown] = useState<boolean>(!!error);
  topScroll();

  useEffect(() => {
    setErrorIsShown(!!error);
  }, [error]);

  return (
    <>
      <Loader isLoading={loading} />
      <Hero />
      {data && <CharacterDetails character={data.character} />}

      <ToastMessage
        type="error"
        message={`Character with ID ${characterId} has not been found`}
        isOpen={errorIsShown}
        handleClose={() => {
          setErrorIsShown(false);
        }}
      />
    </>
  );
};

export default Character;
