import {
  characterFormFields,
  episodeFormFields,
  locationFormFields,
} from 'constants/filter';

/**
 * Get the filter fields according to the chosen properties.
 *
 * @param chosenProperties - An array of chosen property names ('location', 'character', 'episode').
 * @returns An array containing filter form fields.
 */
export const getFilterFields = (chosenProperties: string[]) => {
  const formFieldsMap: Record<string, IFormField[]> = {
    character: characterFormFields,
    location: locationFormFields,
    episode: episodeFormFields,
  };

  return chosenProperties.reduce((filterFields: IFormField[], property) => {
    const fieldsToAdd = formFieldsMap[property];
    if (fieldsToAdd) filterFields.push(...fieldsToAdd);

    return filterFields;
  }, []);
};
