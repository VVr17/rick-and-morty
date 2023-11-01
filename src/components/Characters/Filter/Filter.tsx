import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { fetchCharacters } from 'app/redux/characters/charactersOperations';
import { useAppDispatch } from 'app/redux/hooks';
import { useForm } from 'react-hook-form';

/**
 * select 1=> type : Character, Location, Episode.
 * select 2:
 * type = Character: name, status,species,type,gender

 */
const Filter = () => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    // dispatch(fetchCharacters({ page: 1, name: 'rick' }));
  };

  const toggleFilter = () => {
    // TODO: add reset filter when it is removed
    setFilterIsOpen(prevState => !prevState);
  };

  return (
    <Box mb={2.5} display="flex" gap={2}>
      <Button variant="contained" color={'secondary'} onClick={toggleFilter}>
        {!filterIsOpen ? 'Filter' : 'Remove filter'}
      </Button>

      {filterIsOpen && (
        <>
          <Button
            variant="contained"
            color={'secondary'}
            onClick={handleSearch}
          >
            Find
          </Button>
        </>
      )}
    </Box>
  );
};

export default Filter;
