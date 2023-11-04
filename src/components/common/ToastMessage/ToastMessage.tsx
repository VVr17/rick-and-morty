import React from 'react';
import { Box, Alert, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  isOpen: boolean;
  message: string;
  setIsOpen: (value: boolean) => void;
}

const ToastMessage: React.FC<IProps> = ({ isOpen, setIsOpen, message }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={isOpen}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default ToastMessage;
