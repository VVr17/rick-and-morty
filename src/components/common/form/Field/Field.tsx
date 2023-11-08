import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';
import ErrorMessage from '../ErrorMessage';
import { styles } from './styles';

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
      render={({ field, fieldState }) => (
        <FormControl
          component="label"
          error={!!fieldState.error}
          sx={{ position: 'relative', width: '100%' }}
        >
          <TextField
            {...field}
            placeholder={placeholder}
            variant="outlined"
            sx={styles}
          />
          {fieldState.error?.message && (
            <ErrorMessage message={fieldState.error.message} />
          )}
        </FormControl>
      )}
    />
  );
};

export default Field;
