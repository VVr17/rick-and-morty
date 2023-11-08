import { CharacterType, ISearchQuery, PropertyType } from 'types';
import { filterCharacters } from './filterByProperty';
import { getTotalPages } from './getTotalPages';
import { FIRST_PAGE, ITEMS_PER_PAGE } from 'constants/listConstants';

/**
 * Get a subset of character IDs for the current page based on search criteria and property type.
 *
 * @param characters - An array of characters to filter.
 * @param query - The search query containing filter parameters.
 * @param propertyType - The type of property for filtering ('character', 'location', 'episode').
 * @param currentPage - The current page number.
 * @returns An object with the character IDs for the current page and the total number of pages.
 */
export const getCharacterIdsByPage = (
  characters: CharacterType[],
  query: ISearchQuery,
  propertyType: PropertyType,
  currentPage: number
) => {
  const filteredIds = filterCharacters(characters, query, propertyType);

  const startIndex = (currentPage - FIRST_PAGE) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCharacterIds = filteredIds.slice(startIndex, endIndex);

  const totalPages = getTotalPages(filteredIds);

  return { currentCharacterIds, totalPages };
};
