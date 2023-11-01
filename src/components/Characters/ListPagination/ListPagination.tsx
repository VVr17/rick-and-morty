import React, { ChangeEvent, useState } from 'react';
import { Box } from '@mui/system';
import { Pagination, PaginationItem } from '@mui/material';

import { FIRST_PAGE } from 'constants/listConstants';
import { selectCharacters } from 'app/redux/characters/selectors';
import { useAppSelector } from 'app/redux/hooks';
import { buttonStyles, navButtonStyles } from './styles';

const ListPagination = () => {
  const { totalPages } = useAppSelector(selectCharacters);
  const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);

  const handleChange = (event: ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Pagination
        count={totalPages || FIRST_PAGE}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={handleChange}
        renderItem={item => {
          // Check if the item represents the "next" or "previous" button
          if (item.type === 'next' || item.type === 'previous') {
            return <PaginationItem sx={navButtonStyles} {...item} />;
          } else {
            // Other buttons
            return <PaginationItem sx={buttonStyles} {...item} />;
          }
        }}
      />
    </Box>
  );
};

export default ListPagination;
