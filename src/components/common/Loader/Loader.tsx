import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

interface IProps {
  isLoading: boolean;
}

const Loader: React.FC<IProps> = ({ isLoading }) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: theme => theme.zIndex.drawer + 1,
        bgcolor: 'transparent',
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
