import React from 'react';
import { Typography } from '@mui/material';

interface IProps {
  content: string;
  mb?: number;
}

const Details: React.FC<IProps> = ({ content, mb }) => {
  return (
    <Typography fontSize={18} mb={mb ? mb : 0}>
      {content}
    </Typography>
  );
};

export default Details;
