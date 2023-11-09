import { FIRST_PAGE } from 'constants/listConstants';

export const getInfoMessage = (type: PropertyType, totalPages: number) => {
  if (totalPages === FIRST_PAGE) return null;

  return `We've shown characters from the first 20 ${
    type === 'episode' ? `episodes` : `locations`
  }. Please refine your search to see more options.`;
};
