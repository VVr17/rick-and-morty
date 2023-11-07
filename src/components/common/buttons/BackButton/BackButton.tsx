import React from 'react';
import { Button } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import { styles } from './styles';

interface IProps {
  goBack: () => void;
}

const BackButton: React.FC<IProps> = ({ goBack }) => {
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
