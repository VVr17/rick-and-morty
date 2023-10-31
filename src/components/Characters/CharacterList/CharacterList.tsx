import React from 'react';
import { useAppSelector } from 'app/redux/hooks';
import { selectCharacters } from 'app/redux/characters/selectors';
import { Grid } from '@mui/material';
import Item from './Item';

const CharacterList = () => {
  const { characters, isLoading } = useAppSelector(selectCharacters);

  return (
    <Grid component="ul" container spacing={2} mb={3.25}>
      {characters &&
        characters.map(character => {
          if (character)
            return <Item key={character.id} character={character} />;
        })}
    </Grid>
  );
};

export default CharacterList;
