import React from 'react';
import { Grid } from '@mui/material';

import { selectCharacters } from 'app/redux/characters/selectors';
import { useAppSelector } from 'app/redux/hooks';
import Item from './Item';
import Actions from 'components/Actions';

const CharacterList = () => {
  const { characterList } = useAppSelector(selectCharacters);

  return (
    <Grid component="ul" container spacing={2} mb={3.25} position="relative">
      {characterList.map(
        character =>
          character && <Item key={character.id} character={character} />
      )}
      <Actions />
    </Grid>
  );
};

export default CharacterList;
