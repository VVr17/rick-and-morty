import React, { MouseEvent } from 'react';
import { IconButton, Typography } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';

interface IProps {
  isOpen: boolean;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}
const Fab: React.FC<IProps> = ({ isOpen, handleClick }) => {
  return (
    <IconButton
      aria-controls={isOpen ? 'more-actions-menu' : undefined}
      onClick={handleClick}
      aria-label="display more actions"
      edge="end"
      color="primary"
      sx={{
        backgroundColor: 'primary.light',
        width: 56,
        height: 56,
        position: 'absolute',
        bottom: 0,
        right: 0,
        transform: 'translate(10px, 20px)',
        '&:hover': {
          backgroundColor: 'text.secondary',
        },
      }}
    >
      <MoreIcon />
    </IconButton>
  );
};

export default Fab;
