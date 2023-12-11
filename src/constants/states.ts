import { IEpisodesState } from 'types/EpisodesListState';
import { FIRST_PAGE } from './listConstants';
import {
  ICharacters,
  ICharactersState,
  IEpisodes,
  ILocations,
  ILocationsState,
} from 'types';

export const defaultCharacters: ICharacters = {
  data: [],
  totalPages: FIRST_PAGE,
  info: null,
};

export const initialCharactersState: ICharactersState = {
  ...defaultCharacters,
  isLoading: false,
  error: null,
};

export const initialHistoryState: IHistory = {
  history: [],
};

export const defaultEpisodes: IEpisodes = {
  data: [],
  totalPages: FIRST_PAGE,
};

export const initialEpisodesState: IEpisodesState = {
  ...defaultEpisodes,
  isLoading: false,
  error: null,
};

export const defaultLocations: ILocations = {
  data: [],
  totalPages: FIRST_PAGE,
};

export const initialLocationsState: ILocationsState = {
  ...defaultLocations,
  isLoading: false,
  error: null,
};
