import * as React from 'react';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import { Stack, Snackbar } from '@mui/material';

interface IProps {
  type: AlertColor;
  message: string;
  isOpen: boolean;
  handleClose: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastMessage: React.FC<IProps> = ({
  message,
  isOpen,
  handleClose,
  type,
}) => {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ToastMessage;
