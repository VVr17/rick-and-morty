import React from 'react';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';

import FooterLogo from 'components/common/FooterLogo';
import Socials from './Socials';

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
        <Typography
          variant="body1"
          component="p"
          color="text.secondary"
          mb={4.25}
          fontSize={14}
          fontWeight={700}
          textAlign="center"
          textTransform="uppercase"
        >
          performed as part of a test <br /> case for the company
        </Typography>

        <FooterLogo />
        <Socials />

        <Typography component="span" fontSize={12} color="text.secondary">
          {new Date().getUTCFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
