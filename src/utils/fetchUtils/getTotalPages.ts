import { FIRST_PAGE, ITEMS_PER_PAGE } from 'constants/listConstants';
import { CharacterType } from 'types/character';

export const getTotalPages = (characters: number[]) => {
  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);
  return totalPages > FIRST_PAGE ? totalPages : FIRST_PAGE;
};
