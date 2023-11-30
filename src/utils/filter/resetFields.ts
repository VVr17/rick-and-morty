import { UseFormSetValue } from 'react-hook-form';
import {
  characterFields,
  episodeFields,
  locationFields,
  properties,
} from 'constants/filter';

/**
 * Get specific form fields based on the chosen properties and their states to be reset.
 *
 * @param chosenProperties - An array of chosen properties (e.g., 'character', 'location', 'episode').
//  * @param setValue - A function from react-hook-form to set form field values.
 */
export const getFieldsToReset = (
  chosenProperties: string[]
): (keyof IFilterFields)[] => {
  const fieldsMap: Record<string, (keyof IFilterFields)[]> = {
    character: characterFields,
    location: locationFields,
    episode: episodeFields,
  };

  const fieldsToReset: (keyof IFilterFields)[] = properties.reduce(
    (fields: (keyof IFilterFields)[], property) => {
      if (!chosenProperties.includes(property)) {
        fields.push(...fieldsMap[property]);
      }
      return fields;
    },
    []
  );

  if (chosenProperties.length) {
    fieldsToReset.push('search');
  }

  return fieldsToReset;
};

/**
 * Reset specific form fields.
 *
 * @param fieldsToReset - Specific form fields to be reset.
 * @param setValue - A function from react-hook-form to set form field values.
 */
export const resetFilter = (
  fieldsToReset: (keyof IFilterFields)[],
  setValue: UseFormSetValue<IFilterFields>
) => {
  fieldsToReset.forEach(fieldName => {
    setValue(fieldName, '');
  });
};
