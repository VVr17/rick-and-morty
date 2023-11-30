import React from 'react';
import { PaginationItem, PaginationRenderItemParams } from '@mui/material';
import { buttonStyles, navButtonStyles } from './styles';

interface IProps {
  item: PaginationRenderItemParams;
}

const PaginationButton: React.FC<IProps> = ({ item }) => {
  const isNavButton = item.type === 'next' || item.type === 'previous';

  return (
    <PaginationItem
      sx={isNavButton ? navButtonStyles : buttonStyles}
      {...item}
    />
  );
};

export default PaginationButton;
