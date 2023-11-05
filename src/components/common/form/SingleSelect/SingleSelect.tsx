import React from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  FormControl,
  ListItemText,
  MenuItem,
  Radio,
  Select,
} from '@mui/material';
import ErrorMessage from '../ErrorMessage';

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
  options: string[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 220,
    },
  },
};

const SingleSelect: React.FC<IProp> = ({
  control,
  name,
  placeholder,
  options,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          error={!!fieldState.error}
          component="label"
          sx={{ width: '100%', position: 'relative' }}
        >
          <Select
            {...field}
            displayEmpty
            renderValue={selected => (!selected ? placeholder : selected)}
            MenuProps={MenuProps}
            sx={{
              backgroundColor: 'secondary.main',
              color: 'primary.dark',
            }}
          >
            <MenuItem value="">
              <em>{placeholder}</em>
            </MenuItem>
            {options.map(option => (
              <MenuItem key={option} value={option}>
                <Radio checked={field.value === option} color="primary" />
                <ListItemText primary={option} sx={{ color: 'primary.dark' }} />
              </MenuItem>
            ))}
          </Select>
          {fieldState.error?.message && (
            <ErrorMessage message={fieldState.error.message} />
          )}
        </FormControl>
      )}
    />
  );
};

export default SingleSelect;
