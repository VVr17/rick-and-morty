import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { FIRST_PAGE } from 'constants/listConstants';
import { errorMessage } from 'constants/errorMessage';
import { updateSearchParams } from 'utils/filter';
import { useSelectData, useFilterType } from 'utils/hooks';

import Actions from 'components/Actions';
import Filter from './Filter';
import EntitiesList from './EntitiesList';
import ListPagination from 'components/common/ListPagination';
import Section from 'components/common/Section';
import ToastMessage from 'components/common/ToastMessage';

const Entities = () => {
  const { totalPages, data, isLoading, error, info } = useSelectData();
  const filterType = useFilterType();

  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [toastIsShown, setToastIsShown] = useState<boolean>(!!error);

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
      <Section>
        {!isLoading && (
          <>
            <Filter type={filterType} />
            {!data.length ? (
              <Box position="relative">
                <Typography component="p" variant="h3">
                  Sorry, no information were found based on your request.
                </Typography>
                <Actions type="filter" />
              </Box>
            ) : (
              <EntitiesList data={data} />
            )}

            {totalPages > FIRST_PAGE && currentPage && (
              <ListPagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChange={handlePageChange}
              />
            )}
          </>
        )}
      </Section>

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

export default Entities;
