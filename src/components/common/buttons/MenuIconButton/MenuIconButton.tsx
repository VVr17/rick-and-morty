import React, { ReactNode } from 'react';
import { IconButton } from '@mui/material';

interface IProps {
  children: ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuIconButton: React.FC<IProps> = ({ handleClick, children }) => {
  return (
    <IconButton
      onClick={handleClick}
      aria-label="display more actions"
      edge="end"
      color="primary"
      sx={{
        backgroundColor: 'primary.light',
        width: 40,
        height: 40,
        '&:hover': {
          backgroundColor: 'text.secondary',
        },
      }}
    >
      {children}
    </IconButton>
  );
};

export default MenuIconButton;
