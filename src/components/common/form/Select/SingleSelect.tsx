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
import SelectValue from './SelectValue';
import { checkedStyles, optionStyles, selectStyles } from './styles';

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
  options: string[];
}

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
            renderValue={selected => (
              <SelectValue selected={selected} placeholder={placeholder} />
            )}
            sx={selectStyles}
          >
            {['', ...options].map(option => (
              <MenuItem key={option} value={option}>
                <ListItemText
                  primary={option ? option : 'none'}
                  sx={optionStyles}
                />
                <Radio
                  checked={field.value === option}
                  color="primary"
                  sx={checkedStyles}
                />
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
