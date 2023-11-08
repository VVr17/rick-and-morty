import { FIRST_PAGE, ITEMS_PER_PAGE } from 'constants/listConstants';

/**
 * Calculate the total number of pages based on the number of characters and items per page.
 *
 * @param characters - An array of character IDs.
 * @returns The total number of pages for paginating characters.
 */
export const getTotalPages = (characters: number[]) => {
  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);
  return totalPages > FIRST_PAGE ? totalPages : FIRST_PAGE;
};
