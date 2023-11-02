import React, { useState, useEffect } from 'react';
import { Button, FormControl } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch } from 'app/redux/hooks';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filterSchema } from 'utils/validation/filterValidationSchema';
import Field from 'components/common/form/Field';
import FormSelect from 'components/common/form/FormSelect';

const properties = ['character', 'location', 'episode'];

export type FormValues = {
  search: string; // search by key word --> search by character - by name, species, type
  property: Array<'character' | 'location' | 'episode'>;
  name: string;
  status: 'alive' | 'dead' | 'unknown' | string;
  species: string;
  type: string;
  gender: 'female' | 'male' | 'genderless' | 'unknown' | string;

  locationName: string;
  locationType: string;
  dimension: string;

  episodeName: string;
  episode: string; // (episode code) validation "S01E01" -> from S01E01-S01E11 / S02E01-S02E10 / S03E01-S03E10 / S04E01-S04E10 / S05E01-S05E10
};

const Filter = () => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  // Form control using React Hook Form
  const formConfig = {
    // resolver: yupResolver(filterSchema),
    // mode: 'onSubmit', // Set your desired mode here ('onBlur', 'onChange', or 'onSubmit')
    defaultValues: {
      search: '',
      property: [],
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      locationName: '',
      locationType: '',
      dimension: '',
      episodeName: '',
      episode: '',
    },
  };

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    register,
    watch,
    formState: { defaultValues },
  } = useForm<FormValues>(formConfig);

  const onSubmit: SubmitHandler<FormValues> = data => {
    // Handle form submission
    console.log(data);
  };

  const toggleFilter = () => {
    // TODO: add reset filter when it is removed
    setFilterIsOpen(prevState => !prevState);
  };

  const chosenProperties = watch('property');
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(
    !!chosenProperties.length
  );

  useEffect(() => {
    setMenuIsOpen(!!chosenProperties.length);
  }, [chosenProperties]);

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
          <FormSelect
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
                <Field
                  name="name"
                  control={control}
                  placeholder="Character name"
                  // chosenProperties.includes('character')
                />
                <Field
                  name="status"
                  control={control}
                  placeholder="Character status"
                  // chosenProperties.includes('character')
                />
                <Field
                  name="species"
                  control={control}
                  placeholder="Character species"
                  // chosenProperties.includes('character')
                />
                <Field
                  name="type"
                  control={control}
                  placeholder="Character type"
                  // chosenProperties.includes('character')
                />
                <Field
                  name="gender"
                  control={control}
                  placeholder="Character gender"
                  // chosenProperties.includes('character')
                />

                <Field
                  name="locationName"
                  control={control}
                  placeholder="Location name"
                  // chosenProperties.includes('location')
                />
                <Field
                  name="locationType"
                  control={control}
                  placeholder="Location type"
                  // chosenProperties.includes('location')
                />
                <Field
                  name="dimension"
                  control={control}
                  placeholder="Dimension"
                  // chosenProperties.includes('location')
                />

                <Field
                  name="episodeName"
                  control={control}
                  placeholder="Episode name"
                  // chosenProperties.includes('episode')
                />
                <Field
                  name="episode"
                  control={control}
                  placeholder="Episode code"
                  // chosenProperties.includes('episode')
                />
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
