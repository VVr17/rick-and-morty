import React from 'react';
import { ListItemText } from '@mui/material';

interface IProp {
  selected: string;
  placeholder: string;
}

const SelectValue: React.FC<IProp> = ({ selected, placeholder }) => {
  return (
    <>
      {!selected ? (
        <ListItemText primary={placeholder} sx={{ opacity: 0.8 }} />
      ) : (
        <ListItemText primary={selected} sx={{ textTransform: 'capitalize' }} />
      )}
    </>
  );
};

export default SelectValue;
