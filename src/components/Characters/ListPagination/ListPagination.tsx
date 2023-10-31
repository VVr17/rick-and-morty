import React, { ChangeEvent, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box } from '@mui/system';

const ListPagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChange = (event: ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Pagination
        count={6}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={handleChange}
      />
    </Box>
  );
};

export default ListPagination;
