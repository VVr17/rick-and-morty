import React from 'react';
import { Box } from '@mui/system';
import { Pagination } from '@mui/material';

import { FIRST_PAGE } from 'constants/listConstants';
import PaginationButton from './PaginationButton';

interface IProps {
  currentPage: number;
  totalPages: number;
  handleChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const ListPagination: React.FC<IProps> = ({
  currentPage,
  totalPages,
  handleChange,
}) => {
  return (
    <Box display="flex" justifyContent="center">
      <Pagination
        count={totalPages || FIRST_PAGE}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={handleChange}
        renderItem={item => <PaginationButton item={item} />}
      />
    </Box>
  );
};

export default ListPagination;
