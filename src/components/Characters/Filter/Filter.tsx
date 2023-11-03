import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  Fade,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch } from 'app/redux/hooks';

import {
  useForm,
  Resolver,
  SubmitHandler,
  ValidationMode,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Field from 'components/common/form/Field';
import MultipleSelect from 'components/common/form/MultipleSelect';
import { IFormFields } from 'types/filterForm';
import { filterDefaultValues } from 'constants/filter/filterDefaultValues';

import CharacterFields from './CharacterFields';
import LocationFields from './LocationFields';
import EpisodeFields from './EpisodeFields';
import { resetFields } from 'utils/filter/resetFields';
import { properties } from 'constants/filter/filterSelectValues';

import { filterSchema } from 'utils/validation/filterValidationSchema';
import ToastMessage from 'components/common/ToastMessage/ToastMessage';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { updateSearchParams } from 'utils/filter/updateSeacrhParams';

const Filter = () => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Form control using React Hook Form
  const formConfig = {
    resolver: yupResolver(filterSchema) as Resolver<IFormFields>,
    mode: 'all' as keyof ValidationMode,
    defaultValues: filterDefaultValues,
  };

  const { handleSubmit, control, reset, setValue, watch } =
    useForm<IFormFields>(formConfig);

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
      reset(filterDefaultValues);
      navigate('/');
    }

    setFilterIsOpen(prevState => !prevState);
  };

  // Handle form submission
  const onSubmit: SubmitHandler<IFormFields> = data => {
    const { property, ...fields } = data;

    // Check if any field is not null or an empty array
    const hasValue = Object.values(fields).some(value => value && value.length);

    // If there is value for at least one filter field, send info message
    if (!hasValue) {
      setToastIsOpen(true);
      return;
    }

    // Update query params according to the chosen filter fields
    const updatedSearchParams = updateSearchParams(searchParams, data);

    // Apply the updated search parameters to the URL
    navigate(updatedSearchParams);
  };

  return (
    <>
      <ToastMessage
        isOpen={toastIsOpen}
        setIsOpen={setToastIsOpen}
        message="At least one field should be filled in"
      />

      <Box mb={2.5} display="flex">
        <Button
          variant="contained"
          color={'secondary'}
          onClick={toggleFilter}
          sx={{ marginRight: '160px', minWidth: '142px', padding: '16px' }}
        >
          {!filterIsOpen ? 'Filter' : 'Remove filter'}
        </Button>

        <Fade in={filterIsOpen}>
          <Box
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

              <Fade in={menuIsOpen}>
                <Box position="absolute" top={0} left={0} zIndex={50}>
                  {characterChosen && <CharacterFields control={control} />}
                  {locationChosen && <LocationFields control={control} />}
                  {episodeChosen && <EpisodeFields control={control} />}
                </Box>
              </Fade>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color={'secondary'}
              sx={{ minWidth: '112px', padding: '16px' }}
            >
              Find
            </Button>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default Filter;
