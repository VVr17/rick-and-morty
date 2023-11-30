import React, { MouseEventHandler, ReactNode } from 'react';
import { IconButton } from '@mui/material';
import { styles } from './styles';

interface IProps {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
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
      sx={styles}
    >
      {children}
    </IconButton>
  );
};

export default MenuIconButton;
