import React from 'react';
import { Box } from '@mui/system';
import Container from 'components/Container';
import InCodeIcon from 'assets/icons/incode.svg';
import { DescStyled, LogoStyled } from './Footer.styled';
import { AiFillGithub, AiFillHeart } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa6';
import { useTheme } from '@mui/material/styles';

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
          <AiFillGithub width={40} height={40} />
          <FaTwitter width={40} height={40} />
          <AiFillHeart width={40} height={40} />
        </Box>
        <span>2023</span>
      </Container>
    </Box>
  );
};

export default Footer;
