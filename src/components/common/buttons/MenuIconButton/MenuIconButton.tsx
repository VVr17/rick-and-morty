import React, { ReactNode } from 'react';
import { IconButton } from '@mui/material';

interface IProps {
  children: ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const MenuIconButton: React.FC<IProps> = ({
  handleClick,
  disabled,
  children,
}) => {
  return (
    <IconButton
      onClick={handleClick}
      aria-label="display more actions"
      edge="end"
      color="primary"
      disabled={disabled}
      sx={{
        backgroundColor: 'primary.light',
        width: 40,
        height: 40,
        '&:hover': {
          backgroundColor: 'text.secondary',
        },
        '&:focus': {
          backgroundColor: 'text.secondary',
        },
        '&:disabled': {
          backgroundColor: 'text.secondary',
          opacity: 0.8,
          cursor: 'default',
        },
      }}
    >
      {children}
    </IconButton>
  );
};

export default MenuIconButton;
