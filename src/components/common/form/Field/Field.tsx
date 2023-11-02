import React from 'react';
import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
}

const Field: React.FC<IProp> = ({ control, name, placeholder }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          placeholder={placeholder}
          variant="outlined"
          sx={{
            width: '100%',
            '& input': {
              color: 'primary.dark',
              backgroundColor: 'secondary.main',
              borderRadius: '4px',
            },
            '& input::placeholder': {
              color: 'primary.main',
            },
          }}
        />
      )}
    />
  );
};

export default Field;
