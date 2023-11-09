import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Box } from '@mui/system';
import {
  Fade,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { filterDefaultValues, properties } from 'constants/filter';
import {
  formConfig,
  getFilterIsChanged,
  getPropertyState,
  resetFields,
  retrieveSearchParams,
  updateSearchParams,
} from 'utils/filter';
import { getHistoryMessage } from 'utils';
import { setHistoryItem } from 'app/redux/history';
import { useAppDispatch } from 'app/redux/hooks';

import { ButtonMain } from 'components/common/buttons';
import { CharacterFields, EpisodeFields, LocationFields } from './fields';
import { Field, FormSelect } from 'components/common/form';
import ToastMessage from 'components/common/ToastMessage';
import { formStyles } from './styles';

const Filter = () => {
  const dispatch = useAppDispatch();
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const [toastIsOpen, setToastIsOpen] = useState(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Styles
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Form control using React Hook Form
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { defaultValues },
  } = useForm<IFilterFields>(formConfig);

  // Properties select status
  const chosenProperties = watch('property');
  const { propertyIsChosen, characterChosen, locationChosen, episodeChosen } =
    getPropertyState(chosenProperties);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(propertyIsChosen);

  // Get current URL search params and set to Filter default values
  useEffect(() => {
    const { page, ...filterFields } = retrieveSearchParams(searchParams);
    reset(filterFields);

    // Open form menu if there are chosen properties
    setMenuIsOpen(!!filterFields?.property?.length);
  }, [searchParams]);

  // Properties select handler
  const handlePropertyChange = (event: SelectChangeEvent<any>) => {
    const selectedProperties = event.target.value;
    const isChosen = !!selectedProperties.length;

    // Open / close menu with filter fields according to chosen properties
    setMenuIsOpen(isChosen);

    //Reset fields for unchecked properties to default empty values
    resetFields(selectedProperties, setValue);
  };

  // Open / close filter.
  const toggleFilter = () => {
    // Reset filter if it is closed
    if (filterIsOpen) {
      reset(filterDefaultValues);
      navigate('/');
    }

    setFilterIsOpen(prevState => !prevState);
  };

  // Handle form submission
  const onSubmit: SubmitHandler<IFilterFields> = dataToUpdate => {
    const isFilterChanged = getFilterIsChanged(
      dataToUpdate,
      defaultValues as IFilterFields
    );

    if (!isFilterChanged) {
      setToastIsOpen(true);
      return;
    }

    // Update query params according to the chosen filter fields
    const updatedSearchQuery = updateSearchParams({
      searchParams,
      searchType: 'filter',
      dataToUpdate,
    });

    navigate(updatedSearchQuery); // Apply the updated search parameters to the URL
    dispatch(setHistoryItem(getHistoryMessage(dataToUpdate))); // Add filter to history
    setFilterIsOpen(false); // Close filter
  };

  return (
    <>
      <Box
        mb={2.5}
        display="flex"
        position="relative"
        zIndex={50}
        flexDirection={isDesktop ? 'row' : 'column'}
        gap={isDesktop ? 20 : 4}
      >
        <ButtonMain
          handleClick={toggleFilter}
          label={!filterIsOpen ? 'Filter' : 'Remove filter'}
          minWidth="142px"
        />

        {filterIsOpen && (
          <Fade in={filterIsOpen}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={formStyles}
            >
              <FormSelect
                control={control}
                name="property"
                type="checkbox"
                placeholder="Select item"
                options={properties}
                handlePropertyChange={handlePropertyChange}
                width="200px"
              />

              <Box position="relative" width="300px">
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
              <ButtonMain type="submit" minWidth="112px" label="Find" />
            </Box>
          </Fade>
        )}
      </Box>
      <ToastMessage
        type="warning"
        message="At least one field should be changed"
        isOpen={toastIsOpen}
        handleClose={() => {
          setToastIsOpen(false);
        }}
      />
    </>
  );
};

export default Filter;
