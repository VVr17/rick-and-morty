import { FIRST_PAGE } from './listConstants';
import { ICharacters, ICharactersState } from 'types';

export const defaultCharacters: ICharacters = {
  characterList: [],
  totalPages: FIRST_PAGE,
  info: null,
};

export const initialCharactersState: ICharactersState = {
  ...defaultCharacters,
  isLoading: false,
  error: null,
};
