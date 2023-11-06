import React from 'react';
import { Typography } from '@mui/material';

interface IProps {
  message: string;
}

const DescriptionTitle: React.FC<IProps> = ({ message }) => {
  return (
    <Typography color="text.secondary" fontSize={16} fontWeight={500}>
      {message}
    </Typography>
  );
};

export default DescriptionTitle;
