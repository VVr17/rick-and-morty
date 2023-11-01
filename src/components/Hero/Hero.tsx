import React from 'react';
import { Typography } from '@mui/material';

import Container from 'components/Container';
import { HeroStyled } from './Hero.styled';

const Hero = () => {
  return (
    <HeroStyled>
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
    </HeroStyled>
  );
};

export default Hero;
