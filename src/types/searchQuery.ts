import { IFormFields } from './filterForm';

export interface ISearchQuery extends IFormFields {
  page: number;
  [key: string]: string | number | string[];
}

// TODO: check if I need to API request
export interface ICharacterQuery {
  page: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  species: string;
}

// TODO: check if I need to API request
export interface ILocationQuery {
  name: string;
  type: string;
  dimension: string;
}

// TODO: check if I need to API request
export interface IEpisodeQuery {
  name: string;
  episode: string;
}
