import { ITEMS_PER_PAGE } from 'constants/listConstants';
import { CharacterType } from 'types/character';

export const getCharactersByPage = (
  characters: CharacterType[],
  currentPage: number
) => {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCharacters = characters.slice(startIndex, endIndex);

  return currentCharacters;
};
