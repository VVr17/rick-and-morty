import { UseFormSetValue } from 'react-hook-form';

import {
  characterFields,
  episodeFields,
  locationFields,
} from 'constants/filter';
import { getPropertyState } from './getPropertyState';
import { IFilterFields } from 'types';

/**
 * Reset specific form fields based on the chosen properties and their states.
 *
 * @param chosenProperties - An array of chosen properties (e.g., 'character', 'location', 'episode').
 * @param setValue - A function from react-hook-form to set form field values.
 */
export const resetFields = (
  chosenProperties: string[],
  setValue: UseFormSetValue<IFilterFields>
): void => {
  const { characterChosen, locationChosen, episodeChosen } =
    getPropertyState(chosenProperties);
  const fieldsToReset: (keyof IFilterFields)[] = [];

  if (chosenProperties.length) fieldsToReset.push('search');
  if (!characterChosen) fieldsToReset.push(...characterFields);
  if (!locationChosen) fieldsToReset.push(...locationFields);
  if (!episodeChosen) fieldsToReset.push(...episodeFields);

  if (fieldsToReset.length) {
    fieldsToReset.forEach(fieldName => {
      setValue(fieldName, '');
    });
  }
};
