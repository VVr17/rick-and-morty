import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { fetchCharacters } from 'app/redux/characters/charactersOperations';
import { useAppDispatch } from 'app/redux/hooks';
import React from 'react';

const Filter = () => {
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(fetchCharacters({ page: 1, name: 'rick' }));
  };

  return (
    <Box mb={2.5} display="flex" gap={2}>
      <Button variant="contained" color={'secondary'}>
        Filter
      </Button>
      <Button variant="contained" color={'secondary'} onClick={handleSearch}>
        Find
      </Button>
    </Box>
  );
};

export default Filter;
