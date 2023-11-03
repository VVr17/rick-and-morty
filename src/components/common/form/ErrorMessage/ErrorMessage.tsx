import { FormHelperText } from '@mui/material';
import React from 'react';

interface IProps {
  message: string;
}
const ErrorMessage: React.FC<IProps> = ({ message }) => {
  return (
    <FormHelperText
      sx={{ position: 'absolute', bottom: 0, left: 0, zIndex: 50 }}
    >
      {message}
    </FormHelperText>
  );
};

export default ErrorMessage;
