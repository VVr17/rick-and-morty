import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { FIRST_PAGE } from 'constants/listConstants';
import { errorMessage } from 'constants/errorMessage';
import { selectCharacters } from 'app/redux/characters';
import { updateSearchParams } from 'utils/filter';
import { useAppSelector } from 'app/redux/hooks';

import Actions from 'components/Actions';
import CharacterList from './CharacterList';
import Container from 'components/Container';
import Filter from './Filter';
import ListPagination from './ListPagination';
import ToastMessage from 'components/common/ToastMessage';

const Characters = () => {
  const { totalPages, characterList, error, info } =
    useAppSelector(selectCharacters);
  const [toastIsShown, setToastIsShown] = useState<boolean>(!!error);
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get current page from URL if it is exists
  useEffect(() => {
    const page = searchParams?.get('page') || FIRST_PAGE;
    setCurrentPage(+page);
  }, [searchParams]);

  // Open toast message in case of error or info message
  useEffect(() => {
    if (currentPage && currentPage === FIRST_PAGE && !!info) {
      setToastIsShown(!!info);
    }
    if (!!error) {
      setToastIsShown(!!error);
    }
  }, [error, info, currentPage]);

  // Update page in URL search params on page change
  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
    const updatedPage = updateSearchParams({
      searchParams,
      searchType: 'pagination',
      page: newPage,
    });
    navigate(updatedPage);
  };

  return (
    <>
      <Box component="section" py={3} flexGrow={1} bgcolor="primary.main">
        <Container>
          <Filter />
          {!characterList.length ? (
            <Box position="relative">
              <Typography component="p" variant="h3">
                Sorry, no characters were found based on your request.
              </Typography>
              <Actions type="filter" />
            </Box>
          ) : (
            <CharacterList />
          )}

          {totalPages > FIRST_PAGE && currentPage && (
            <ListPagination
              currentPage={currentPage}
              handleChange={handlePageChange}
            />
          )}
        </Container>
      </Box>

      <ToastMessage
        type={info ? 'info' : 'error'}
        message={info ? info : errorMessage}
        isOpen={toastIsShown}
        handleClose={() => {
          setToastIsShown(false);
        }}
      />
    </>
  );
};

export default Characters;
