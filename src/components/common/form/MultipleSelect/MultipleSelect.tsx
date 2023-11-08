import React from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import SelectValue from '../SelectValue';
import { checkboxStyles, selectStyles } from './styles';

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
  options: string[];
  handlePropertyChange?: (event: SelectChangeEvent<any>) => void;
}

const MultipleSelect: React.FC<IProp> = ({
  control,
  name,
  placeholder,
  options,
  handlePropertyChange,
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
            renderValue={selected => (
              <SelectValue
                selected={selected.join(', ')}
                placeholder={placeholder}
              />
            )}
            sx={selectStyles}
            onChange={event => {
              field.onChange(event);
              if (handlePropertyChange) {
                handlePropertyChange(event);
              }
            }}
          >
            {options.map(option => (
              <MenuItem key={option} value={option}>
                <ListItemText
                  primary={option}
                  sx={{ color: 'primary.dark', textTransform: 'capitalize' }}
                />
                <Checkbox
                  checked={field.value.indexOf(option) > -1}
                  sx={checkboxStyles}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default MultipleSelect;
