import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { CircularProgress } from '@mui/material';
import { FETCH_SINGLE_CHARACTER } from 'services/characterService/queries';

import CharacterDetails from 'components/CharacterDetails';
import Hero from 'components/Hero';

const Character = () => {
  const { characterId } = useParams();
  const { loading, error, data } = useQuery(FETCH_SINGLE_CHARACTER, {
    variables: { id: characterId },
  });

  return (
    <>
      <Hero />
      {loading && <CircularProgress color="success" />}
      {data && <CharacterDetails character={data.character} />}
    </>
  );
};

export default Character;
