import React from 'react';
import { Box } from '@mui/system';
import Container from 'components/Container';
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from 'app/redux/hooks';
import { selectCurrentCharacter } from 'app/redux/currentCharacter/selectors';
import CharacterCard from 'components/CharacterDetails/CharacterCard';
import { CircularProgress } from '@mui/material';

const CharacterDetails = () => {
  const theme = useTheme();
  const { isLoading, data } = useAppSelector(selectCurrentCharacter);

  return (
    <Box
      component="section"
      pt="80px"
      pb="252px"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
      }}
    >
      <Container>
        {isLoading && <CircularProgress color="success" />}
        {data && <CharacterCard />}
      </Container>
    </Box>
  );
};

export default CharacterDetails;
