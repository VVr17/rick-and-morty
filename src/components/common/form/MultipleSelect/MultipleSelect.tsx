import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Checkbox, ListItemText, MenuItem, Select } from '@mui/material';

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
        <Select
          {...field}
          multiple
          displayEmpty
          renderValue={selected => {
            if (selected.length === 0) {
              return <span>{placeholder}</span>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          sx={{
            backgroundColor: 'secondary.main',
            color: 'primary.dark',
            width: '220px',
          }}
        >
          {options.map(option => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={field.value.indexOf(option) > -1} />
              <ListItemText primary={option} sx={{ color: 'primary.dark' }} />
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};

export default MultipleSelect;
