import React, { ReactNode } from 'react';
import { ContainerStyled } from './Container.styled';

interface IProps {
  children: ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
