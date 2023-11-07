import React from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
  options: string[];
}

const MultipleSelect: React.FC<IProp> = ({
  control,
  name,
  placeholder,
  options,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl component="label" sx={{ width: '220px' }}>
          <Select
            {...field}
            multiple
            displayEmpty
            renderValue={selected =>
              !selected.length ? placeholder : selected.join(', ')
            }
            sx={{
              backgroundColor: 'secondary.main',
              color: 'primary.dark',
            }}
          >
            {options.map(option => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={field.value.indexOf(option) > -1} />
                <ListItemText primary={option} sx={{ color: 'primary.dark' }} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default MultipleSelect;
