import { UseFormSetValue } from 'react-hook-form';
import {
  characterFields,
  episodeFields,
  locationFields,
  properties,
} from 'constants/filter';

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

  if (fieldsToReset.length) {
    fieldsToReset.forEach(fieldName => {
      setValue(fieldName, '');
    });
  }
};
