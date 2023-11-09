import { filterFields } from 'constants/filter';

/**
 * Generate a user-friendly history message based on filter criteria.
 *
 * @param data - An object containing filter criteria.
 * @returns A message summarizing the applied filter criteria.
 */

export const getHistoryMessage = (data: IFilterFields) => {
  const { search, property } = data;

  // If no property is chosen, generate a message for keyword filtering.
  if (!property.length) {
    return `Фільтр за ключовим словом: ${search}`;
  }

  // Generate a message for filter criteria based on selected fields.
  const chosenFilter = filterFields
    .filter(field => data[field]) // Filter fields with values
    .map(field => `${splitCamelCase(field)}: ${data[field]}`) // Get Field:Value string
    .join(', ');

  return `Фільтр за критеріями: ${chosenFilter}`;
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
