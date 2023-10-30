import React from 'react';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const CharacterList = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      py={3}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
      }}
    >
      <Container>Should be list of characters</Container>
    </Box>
  );
};

export default CharacterList;
