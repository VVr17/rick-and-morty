import { filterFields } from 'constants/filter';
import { IFilterFields } from 'types';

/**
 * Compare form field changes with default values and return whether the filter has been changed.
 *
 * @param dataToUpdate - The updated filter data from the form submit.
 * @param defaultValues - The default filter values.
 *
 * @returns True if the filter has been changed; otherwise, false.
 */
export const getFilterIsChanged = (
  dataToUpdate: IFilterFields,
  defaultValues: IFilterFields
) => {
  const changedFields: string[] = [];

  filterFields.forEach(fieldName => {
    const currentValue = dataToUpdate[fieldName];
    const defaultValue = defaultValues[fieldName];

    if (isFieldChanged(currentValue, defaultValue)) {
      changedFields.push(fieldName);
    }
  });

  return !!changedFields.length;
};

const isFieldChanged = (currentValue: string, defaultValue: string) => {
  return !currentValue ? !!defaultValue : currentValue !== defaultValue;
};
