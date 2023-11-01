import React from 'react';
import { useAppSelector } from 'app/redux/hooks';
import { selectCharacters } from 'app/redux/characters/selectors';
import { Grid } from '@mui/material';
import Item from './Item';

const CharacterList = () => {
  const { characterList, totalPages } = useAppSelector(selectCharacters);

  return (
    <>
      {!!characterList?.length && (
        <Grid component="ul" container spacing={2} mb={3.25}>
          {characterList.map(character => {
            if (character)
              return <Item key={character.id} character={character} />;
          })}
        </Grid>
      )}
    </>
  );
};

export default CharacterList;
