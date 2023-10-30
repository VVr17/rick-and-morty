import React from 'react';
import { Box } from '@mui/system';
import Container from 'components/Container';
import { useTheme } from '@mui/material/styles';

const CharacterCard = () => {
  const theme = useTheme();

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
      <Container>CharacterCard</Container>
    </Box>
  );
};

export default CharacterCard;
