import React from 'react';
import { Grid } from '@mui/material';

import { selectCharacters } from 'app/redux/characters/selectors';
import { useAppSelector } from 'app/redux/hooks';
import Item from './Item';

const CharacterList = () => {
  const { characterList } = useAppSelector(selectCharacters);

  return (
    <Grid component="ul" container spacing={2} mb={3.25}>
      {characterList.map(
        character =>
          character && <Item key={character.id} character={character} />
      )}
    </Grid>
  );
};

export default CharacterList;
