import React from 'react';
import { Button } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';

interface IProps {
  goBack: () => void;
}

const BackButton: React.FC<IProps> = ({ goBack }) => {
  return (
    <Button
      aria-label="back"
      onClick={goBack}
      color="secondary"
      variant="contained"
      sx={{
        marginBottom: '30px',
        padding: '12px',
        display: 'flex',
        gap: '8px',
      }}
    >
      <UndoIcon />
      <span>Go back</span>
    </Button>
  );
};

export default BackButton;
