import React from 'react';
import { Box, Container } from '@mui/system';

import InCodeIcon from 'assets/icons/incode.svg';
import Socials from './Socials';
import { DescStyled, LogoStyled } from './Footer.styled';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" pt={6} pb={10.25} bgcolor="primary.dark">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <DescStyled>
          performed as part of a test case for the company
        </DescStyled>

        <LogoStyled>
          <span></span>
          <img src={InCodeIcon} alt="logo" width={40} height={40} />
        </LogoStyled>

        <Socials />

        <Typography component="span" fontSize={12} color="text.secondary">
          {new Date().getUTCFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
