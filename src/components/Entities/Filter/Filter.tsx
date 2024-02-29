import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { Box } from '@mui/system';
import { Fade, SelectChangeEvent } from '@mui/material';

import {
  episodeFields,
  filterDefaultValues,
  locationFields,
  properties,
} from 'constants/filter';
import {
  formConfig,
  getFieldsToReset,
  getFilterFields,
  getFilterIsChanged,
  resetFilter,
  retrieveSearchParams,
  updateSearchParams,
} from 'utils/filter';
import { getHistoryItemByFilter } from 'utils';
import { setHistoryItem } from 'app/redux/history';
import { useAppDispatch } from 'app/redux/hooks';
import { useMedia } from 'utils/hooks';

import { ButtonMain } from 'components/common/buttons';
import { Field, FormSelect } from 'components/common/form';
import FilterFields from './FilterFields';
import ToastMessage from 'components/common/ToastMessage';
import { formStyles } from './styles';

interface IProps {
  type: FilterType;
}

const Filter: React.FC<IProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { isSm, isMd, isLg } = useMedia(); // Styles

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Form control using React Hook Form
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { defaultValues,touchedFields },
  } = useForm<IFilterFields>(formConfig);

  console.log('touchedFields', touchedFields)
  // Properties select status
  const chosenProperties = watch('property');
  const propertyIsChosen = !!chosenProperties.length;
  const filterFields = getFilterFields(chosenProperties);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(propertyIsChosen);

  // Get current URL search params and set to Filter default values
  useEffect(() => {
    const { page, ...filterFields } = retrieveSearchParams(searchParams);
    reset(filterFields);

    // Open form menu if there are chosen properties
    setMenuIsOpen(!!filterFields?.property?.length);
  }, [searchParams]);

  // Check filter type and set property value
  useEffect(() => {
    if (type === 'episodes') {
      setValue('property', ['episode']);
      setMenuIsOpen(true);
    }
    if (type === 'locations') {
      setValue('property', ['location']);
      setMenuIsOpen(true);
    }
  }, []);

  // Properties select handler
  const handlePropertyChange = (event: SelectChangeEvent<any>) => {
    const selectedProperties = event.target.value;
    const isChosen = !!selectedProperties.length;

    // Open / close menu with filter fields according to chosen properties
    setMenuIsOpen(isChosen);

    //Reset fields for unchecked properties to default empty values
    const resetFields = getFieldsToReset(selectedProperties);
    resetFilter(resetFields, setValue);
  };

  // Open / close filter.
  const toggleFilter = () => {
    // Reset filter if it is closed
    if (filterIsOpen) {
      if (type === 'episodes') {
        resetFilter(episodeFields, setValue);
      } else if (type === 'locations') {
        resetFilter(locationFields, setValue);
      } else {
        reset(filterDefaultValues);
      }
      navigate(location.pathname);
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
      setFilterIsOpen(false); // Close filter
      return;
    }

    // Update query params according to the chosen filter fields
    const updatedSearchQuery = updateSearchParams({
      searchParams,
      searchType: 'filter',
      dataToUpdate,
    });

    navigate(updatedSearchQuery); // Apply the updated search parameters to the URL
    const historyItem = getHistoryItemByFilter(
      dataToUpdate,
      updatedSearchQuery,
      type
    );
    dispatch(setHistoryItem(historyItem)); // Add filter to history
    setFilterIsOpen(false); // Close filter
  };

  return (
    <>
      <Box
        mb={2.5}
        display="flex"
        position="relative"
        zIndex={50}
        flexDirection={isMd ? 'row' : 'column'}
        gap={isLg ? 20 : isMd ? 10 : 4}
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
              sx={{
                ...formStyles,
                flexDirection: isSm ? 'row' : 'column',
              }}
            >
              <FormSelect
                control={control}
                name="property"
                type="checkbox"
                disabled={type !== 'characters'}
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
                  <Box
                    position={isSm ? 'absolute' : 'static'}
                    top={0}
                    left={0}
                    zIndex={50}
                  >
                    <FilterFields control={control} formFields={filterFields} />
                  </Box>
                </Fade>
              </Box>
              <ButtonMain type="submit" minWidth="112px" label="Find" />
            </Box>
          </Fade>
        )}
      </Box>
      <ToastMessage
        type="info"
        message="At least one field should be changed for new search"
        isOpen={toastIsOpen}
        handleClose={() => {
          setToastIsOpen(false);
        }}
      />
    </>
  );
};

export default Filter;
