import React from 'react';
import { Button } from '@mui/material';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  minWidth: string;
}

const ButtonMain: React.FC<IProps> = ({
  type,
  handleClick,
  label,
  minWidth,
}) => {
  return (
    <Button
      type={type ? type : 'button'}
      variant="contained"
      color={'secondary'}
      onClick={handleClick}
      sx={{
        minWidth,
        padding: '16px',
        ':hover': { backgroundColor: 'action.hover' },
        ':focus': { backgroundColor: 'action.hover' },
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonMain;
