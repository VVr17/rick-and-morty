import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

import BurgerMenu from './BurgerMenu/BurgerMenu';
import Container from 'components/common/Container';
import Logo from 'components/common/Logo';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <Logo />

          {/* Mobile App */}
          <BurgerMenu />

          {/* Desktop App */}
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
