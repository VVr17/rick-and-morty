import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Pagination, PaginationItem } from '@mui/material';

import { FIRST_PAGE } from 'constants/listConstants';
import { selectCharacters } from 'app/redux/characters/selectors';
import { updateSearchParams } from 'utils/filter/updateSearchParams';
import { useAppSelector } from 'app/redux/hooks';

import { buttonStyles, navButtonStyles } from './styles';

const ListPagination = () => {
  const { totalPages } = useAppSelector(selectCharacters);
  const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get current page from URL if it is exists
  useEffect(() => {
    const page = searchParams?.get('page');

    if (page) setCurrentPage(+page);
  }, [searchParams]);

  // Update page in URL search params on page change
  const handleChange = (event: ChangeEvent<unknown>, newPage: number) => {
    const updatedPage = updateSearchParams({
      searchParams,
      searchType: 'pagination',
      page: newPage,
    });
    navigate(updatedPage);
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
          const isNavButton = item.type === 'next' || item.type === 'previous';
          return (
            <PaginationItem
              sx={isNavButton ? navButtonStyles : buttonStyles}
              {...item}
            />
          );
        }}
      />
    </Box>
  );
};

export default ListPagination;
