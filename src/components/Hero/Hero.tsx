import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import Container from 'components/Container';
import { styles } from './styles';

const Hero = () => {
  return (
    <Box component="section" sx={styles}>
      <Container>
        <Typography
          variant="h1"
          component="h1"
          align="center"
          color="primary.dark"
          fontWeight={900}
        >
          The Rick and Morty API
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
