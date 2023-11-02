import React, { useState, useEffect } from 'react';
import { Button, FormControl } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch } from 'app/redux/hooks';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filterSchema } from 'utils/validation/filterValidationSchema';
import Field from 'components/common/form/Field';
import MultipleSelect from 'components/common/form/MultipleSelect';
import { FormValues } from 'types/filterForm';
import { filterDefaultValues } from 'constants/filter/filterDefaultValues';

import CharacterFields from './CharacterFields';
import LocationFields from './LocationFields';
import EpisodeFields from './EpisodeFields';
import { resetFields } from 'utils/filter/getResetFields';
import { properties } from 'constants/filter/filterSelectValues';

const Filter = () => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  // Form control using React Hook Form
  const formConfig = {
    // resolver: yupResolver(filterSchema),
    // mode: 'onSubmit', // Set your desired mode here ('onBlur', 'onChange', or 'onSubmit')
    defaultValues: filterDefaultValues,
  };

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>(formConfig);

  // Properties select status
  const chosenProperties = watch('property');
  const propertyIsChosen = !!chosenProperties.length;
  const characterChosen = chosenProperties.includes('character');
  const locationChosen = chosenProperties.includes('location');
  const episodeChosen = chosenProperties.includes('episode');
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(propertyIsChosen);

  useEffect(() => {
    // Open / close menu with filter fields according to chosen properties
    setMenuIsOpen(propertyIsChosen);

    //Reset fields for unchecked property to default empty values
    if (propertyIsChosen) {
      resetFields(chosenProperties, setValue);
    }
  }, [chosenProperties]);

  // Open / close filter. Reset filter if it is closed
  const toggleFilter = () => {
    if (filterIsOpen) {
      reset();
    }

    setFilterIsOpen(prevState => !prevState);
  };

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <Box mb={2.5} display="flex">
      <Button
        variant="contained"
        color={'secondary'}
        onClick={toggleFilter}
        sx={{ marginRight: '160px', minWidth: '142px', padding: '16px' }}
      >
        {!filterIsOpen ? 'Filter' : 'Remove filter'}
      </Button>

      {filterIsOpen && (
        <FormControl
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: '100%',
            display: 'flex',
            gap: '16px',
            flexDirection: 'row',
          }}
        >
          <MultipleSelect
            control={control}
            name="property"
            placeholder="Select item"
            options={properties}
          />
          <Box position="relative" width="260px">
            <Field
              name="search"
              control={control}
              placeholder="Add key word to find"
            />

            {menuIsOpen && (
              <Box position="absolute" top={0} left={0} zIndex={50}>
                {characterChosen && <CharacterFields control={control} />}
                {locationChosen && <LocationFields control={control} />}
                {episodeChosen && <EpisodeFields control={control} />}
              </Box>
            )}
          </Box>

          <Button
            type="submit"
            variant="contained"
            color={'secondary'}
            sx={{ minWidth: '112px', padding: '16px' }}
          >
            Find
          </Button>
        </FormControl>
      )}
    </Box>
  );
};

export default Filter;
