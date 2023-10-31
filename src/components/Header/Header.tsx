import React from 'react';
import { Box } from '@mui/system';

import LogoIcon from 'assets/icons/logo.svg';
import Container from 'components/Container';
import { LogoStyled } from './Header.styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box component="header" py={1.25}>
      <Container>
        <Link to="/">
          <LogoStyled src={LogoIcon} alt="logo" width={40} height={40} />
        </Link>
      </Container>
    </Box>
  );
};

export default Header;
