import React, { ReactNode } from 'react';
import Container from '../Container';
import { Box } from '@mui/system';

interface IProps {
  children: ReactNode;
}

const Section: React.FC<IProps> = ({ children }) => {
  return (
    <Box component="section" pt={3} pb={5} flexGrow={1} bgcolor="primary.main">
      <Container>{children}</Container>
    </Box>
  );
};

export default Section;
