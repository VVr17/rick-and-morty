import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

interface IProps {
  isLoading: boolean;
}

const Loader: React.FC<IProps> = ({ isLoading }) => {
  return (
    <Backdrop
      sx={{
        color: 'action.hover',
        zIndex: theme => theme.zIndex.drawer + 1,
        bgcolor: 'transparent',
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" size={80} />
    </Backdrop>
  );
};

export default Loader;
