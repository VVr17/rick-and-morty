import { filterFields } from 'constants/filter/filterFields';
import { IFilterFields } from 'types/filterForm';

export const getHistoryMessage = (data: IFilterFields) => {
  const { search, property } = data;

  if (!property.length) {
    return `Фільтр за ключовим словом: ${search}`;
  }

  const chosenFilter = filterFields
    .filter(field => data[field]) // Filter fields with values
    .map(field => `${splitCamelCase(field)}: ${data[field]}`) // Get Field:Value string
    .join(', ');

  return `Фільтр за критеріями: ${chosenFilter}`;
};

const splitCamelCase = (word: string) => {
  return word
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/[^A-Za-z]+/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
};
