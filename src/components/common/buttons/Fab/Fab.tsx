import React, { MouseEvent } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MoreIcon from '@mui/icons-material/MoreVert';
import { styles } from './styles';

interface IProps {
  isOpen: boolean;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

type Ref = HTMLButtonElement;

const Fab = React.forwardRef<Ref, IProps>(({ isOpen, handleClick }, ref) => {
  return (
    <IconButton
      ref={ref}
      aria-controls={isOpen ? 'more-actions-menu' : undefined}
      onClick={handleClick}
      aria-label="display more actions"
      edge="end"
      color="primary"
      sx={styles}
    >
      {!isOpen ? <MoreIcon /> : <CloseIcon />}
    </IconButton>
  );
});

Fab.displayName = 'Fab';

export default Fab;
