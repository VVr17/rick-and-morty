import { filterFields } from 'constants/filter';

/**
 * Generate a user-friendly history message based on filter criteria.
 *
 * @param data - An object containing filter criteria.
 * @param query - An URL query string.
 * @param filterType - Type of the filter, e.g. 'characters', 'episodes'
 * @returns A message summarizing the applied filter criteria.
 */

export const getHistoryItemByFilter = (
  data: IFilterFields,
  query: string,
  filterType: FilterType
): IHistoryItem => {
  const { search, property } = data;

  // If no property is chosen, generate a message for keyword filtering.
  if (!property.length) {
    return {
      message: `Фільтр за ключовим словом: ${search}`,
      href: `/${filterType}${query}`,
      type: filterType,
    };
  }

  // Generate a message for filter criteria based on selected fields.
  const chosenFilter = filterFields
    .filter(field => data[field]) // Filter fields with values
    .map(field => `${splitCamelCase(field)}: ${data[field]}`) // Get Field:Value string
    .join(', ');

  return {
    message: `Фільтр ${
      filterType === 'characters'
        ? `персонажів`
        : filterType === 'episodes'
        ? `епізодів`
        : `локацій`
    } за критеріями: ${chosenFilter}`,
    href: `/${filterType}${query}`,
    type: filterType,
  };
};

/**
 * Generate a user-friendly history message based on filter criteria.
 *
 * @param name - A name of a character.
 * @param id - A Character ID.
 * @param filterType - Type of the filter, e.g. 'characters', 'episodes'
 * @returns A message summarizing the applied filter criteria.
 */

export const getHistoryItemById = (
  name: string,
  id: string,
  filterType: FilterType
): IHistoryItem => {
  return {
    message: `Передивився інформацію що до ${name}`,
    href: `/${filterType}/${id}`,
    type: filterType,
  };
};

/**
 * Split a camelCase word and format it as a user-friendly string.
 *
 * @param word - The word to split and format.
 * @returns A user-friendly formatted word.
 */
const splitCamelCase = (word: string) => {
  return word
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/[^A-Za-z]+/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};
