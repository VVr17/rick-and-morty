import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { FIRST_PAGE } from 'constants/listConstants';
import { selectCharacters } from 'app/redux/characters/selectors';
import { useAppSelector } from 'app/redux/hooks';

import CharacterList from 'components/Characters/CharacterList';
import Container from 'components/Container';
import Filter from 'components/Characters/Filter';
import ListPagination from './ListPagination';

const Characters = () => {
  const { totalPages, isLoading, characterList } =
    useAppSelector(selectCharacters);

  return (
    <Box component="section" py={3} bgcolor="primary.main">
      <Container>
        {!isLoading && <Filter />}

        {!isLoading && !characterList.length && (
          <Typography component="p" variant="h3">
            There are no characters found on your request
          </Typography>
        )}

        {!!characterList.length && <CharacterList />}

        {totalPages && totalPages > FIRST_PAGE && <ListPagination />}
      </Container>
    </Box>
  );
};

export default Characters;
