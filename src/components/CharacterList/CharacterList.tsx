import React from 'react';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import { useAppSelector } from 'app/redux/hooks';
import { selectCharacters } from 'app/redux/characters/selectors';

const CharacterList = () => {
  const theme = useTheme();
  const { characters, isLoading } = useAppSelector(selectCharacters);

  console.log('characters in a list component', characters);
  console.log('isLoading', isLoading);

  return (
    <Box
      component="section"
      py={3}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
      }}
    >
      <Container>Should be list of characters</Container>
    </Box>
  );
};

export default CharacterList;
