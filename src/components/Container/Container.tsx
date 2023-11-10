import React, { ReactNode } from 'react';
import { Container as ContainerUI } from '@mui/system';

interface IProps {
  children: ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return (
    <ContainerUI sx={{ maxWidth: '1228px !important' }}>{children}</ContainerUI>
  );
};

export default Container;
