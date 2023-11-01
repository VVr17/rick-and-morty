import React from 'react';
import { Box } from '@mui/system';

import Container from 'components/Container';
import Logo from 'components/common/Logo';

const Header = () => {
  return (
    <Box component="header" py={1.25}>
      <Container>
        <Logo />
      </Container>
    </Box>
  );
};

export default Header;
