import React from 'react';
import { Typography } from '@mui/material';

interface IProps {
  title: string;
  subTitle: string;
}

const DetailsTitle: React.FC<IProps> = ({ title, subTitle }) => {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        textAlign="center"
        fontWeight={600}
        color="action.focus"
        mb={2}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant="h4"
        textAlign="center"
        fontWeight={600}
        color="action.focus"
        mb={4}
      >
        {subTitle}
      </Typography>
    </>
  );
};

export default DetailsTitle;
