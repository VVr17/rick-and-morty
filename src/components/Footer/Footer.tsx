import React from 'react';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import InCodeIcon from 'assets/icons/incode.svg';
import { DescStyled, LogoStyled } from './Footer.styled';

import { GitHub, Twitter, Favorite } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      pt={6}
      pb={10.25}
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary,
      }}
    >
      <Container>
        <DescStyled>
          performed as part of a test case for the company
        </DescStyled>
        <LogoStyled src={InCodeIcon} alt="logo" width={40} height={40} />

        <Box mb={3}>
          <GitHub />
          <Twitter />
          <Favorite />
        </Box>
        <span>2023</span>
      </Container>
    </Box>
  );
};

export default Footer;
