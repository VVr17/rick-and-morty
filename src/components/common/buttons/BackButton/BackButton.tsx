import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import { styles } from './styles';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      aria-label="back"
      onClick={goBack}
      sx={styles}
    >
      <UndoIcon />
      <span>Go back</span>
    </Button>
  );
};

export default BackButton;
