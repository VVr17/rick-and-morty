import React from 'react';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { topScroll } from 'utils';
import { styles } from './styles';

const ButtonUp = () => {
  const handleClick = () => {
    topScroll();
  };

  return (
    <IconButton
      onClick={handleClick}
      aria-label="scroll to the top"
      aria-controls="scroll-to-the-top"
      edge="end"
      color="primary"
      sx={styles}
    >
      <KeyboardDoubleArrowUpIcon />
    </IconButton>
  );
};

export default ButtonUp;
