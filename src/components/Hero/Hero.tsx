import React from 'react';
import { Box } from '@mui/system';

import Container from 'components/common/Container';
import Title from 'components/common/Title';

const Hero = () => {
  return (
    <Box component="section" mt={[8, 10]} py={[4, 5, 6, 8]}>
      <Container>
        <Title />
      </Container>
    </Box>
  );
};

export default Hero;
