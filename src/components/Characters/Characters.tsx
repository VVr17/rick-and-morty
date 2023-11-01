import React from 'react';
import CharacterList from 'components/Characters/CharacterList';
import { useTheme } from '@mui/material/styles';

import Filter from 'components/Characters/Filter';
import { Box } from '@mui/system';
import Container from 'components/Container';
import ListPagination from './ListPagination';

const Characters = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      py={3}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
      }}
    >
      <Container>
        <Filter />
        <CharacterList />
        <ListPagination />
      </Container>
    </Box>
  );
};

export default Characters;
