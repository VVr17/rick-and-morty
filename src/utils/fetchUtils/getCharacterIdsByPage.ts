import { CharacterType } from 'types/character';
import { filterCharacters } from './filterByProperty';
import { getTotalPages } from './getTotalPages';
import { ITEMS_PER_PAGE } from 'constants/listConstants';
import { ISearchQuery } from 'types/searchQuery';
import { PropertyType } from 'types/filterFields';

export const getCharacterIdsByPage = (
  characters: CharacterType[],
  query: ISearchQuery,
  propertyType: PropertyType,
  currentPage: number
) => {
  const filteredIds = filterCharacters(characters, query, propertyType);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCharacterIds = filteredIds.slice(startIndex, endIndex);

  const totalPages = getTotalPages(filteredIds);

  return { currentCharacterIds, totalPages };
};
