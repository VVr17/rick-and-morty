import React from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Radio,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import ErrorMessage from '../ErrorMessage';
import SelectValue from './SelectValue';
import {
  checkedStyles,
  multipleSelectStyles,
  optionStyles,
  selectStyles,
} from './styles';

interface IProp {
  control: Control<any>;
  type: 'radio' | 'checkbox';
  name: string;
  placeholder: string;
  options: string[];
  handlePropertyChange?: (event: SelectChangeEvent<any>) => void;
  width?: string;
}

const FormSelect: React.FC<IProp> = ({
  control,
  type,
  name,
  placeholder,
  options,
  handlePropertyChange,
  width = '100%',
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          error={!!fieldState.error}
          component="label"
          sx={{ width, position: 'relative' }}
        >
          <Select
            {...field}
            multiple={type === 'checkbox'} // check if works
            displayEmpty
            renderValue={selected => (
              <SelectValue
                selected={type === 'checkbox' ? selected.join(', ') : selected}
                placeholder={placeholder}
              />
            )}
            sx={type === 'checkbox' ? multipleSelectStyles : selectStyles}
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
                  primary={option ? option : 'none'}
                  sx={optionStyles}
                />
                {type === 'checkbox' ? (
                  <Checkbox
                    checked={field.value.indexOf(option) > -1}
                    sx={checkedStyles}
                  />
                ) : (
                  <Radio checked={field.value === option} sx={checkedStyles} />
                )}
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

export default FormSelect;
