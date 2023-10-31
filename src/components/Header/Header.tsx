import React from 'react';
import { Box } from '@mui/system';

import LogoIcon from 'assets/icons/logo.svg';
import Container from 'components/Container';
import { LogoStyled } from './Header.styled';

const Header = () => {
  return (
    <Box component="header" py={1.25}>
      <Container>
        <LogoStyled src={LogoIcon} alt="logo" width={40} height={40} />
      </Container>
    </Box>
  );
};

export default Header;
