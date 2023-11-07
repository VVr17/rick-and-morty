import React from 'react';
import { Grid } from '@mui/material';

import { selectCharacters } from 'app/redux/characters';
import { useAppSelector } from 'app/redux/hooks';

import Actions from 'components/Actions';
import Item from './Item';

const CharacterList = () => {
  const { characterList } = useAppSelector(selectCharacters);

  return (
    <Grid component="ul" container spacing={3} mb={3.25} position="relative">
      {characterList.map(
        character =>
          character && <Item key={character.id} character={character} />
      )}
      <Actions type="filter" />
    </Grid>
  );
};

export default CharacterList;
