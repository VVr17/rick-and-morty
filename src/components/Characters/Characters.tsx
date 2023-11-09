import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { FIRST_PAGE } from 'constants/listConstants';
import { errorMessage } from 'constants/errorMessage';
import { selectCharacters } from 'app/redux/characters';
import { useAppSelector } from 'app/redux/hooks';

import CharacterList from './CharacterList';
import Container from 'components/Container';
import Filter from './Filter';
import ListPagination from './ListPagination';
import ToastMessage from 'components/common/ToastMessage';

const Characters = () => {
  const { totalPages, characterList, error, info } =
    useAppSelector(selectCharacters);
  const [toastIsShown, setToastIsShown] = useState<boolean>(!!error);

  useEffect(() => {
    setToastIsShown(!!error || !!info);
  }, [error, info]);

  return (
    <>
      <Box component="section" py={3} bgcolor="primary.main">
        <Container>
          <Filter />
          {!characterList.length ? (
            <Typography component="p" variant="h3">
              There are no characters found on your request
            </Typography>
          ) : (
            <CharacterList />
          )}

          {totalPages > FIRST_PAGE && <ListPagination />}
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
