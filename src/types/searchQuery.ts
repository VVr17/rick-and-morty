import { PropertyType } from './filterFields';
import { IFilterFields } from './filterForm';

export interface ISearchQuery extends IFilterFields {
  page: number;
  [key: string]: string | number | string[];
}

export interface ICharacterQuery {
  page: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  species: string;
}

export interface ILocationQuery {
  locationName: string;
  locationType: string;
  dimension: string;
}

export interface IEpisodeQuery {
  episodeName: string;
  episode: string;
}

export interface IKeyQuery {
  page: number;
  name: string;
  type: string;
  species: string;
}

export interface IQuery {
  characterQuery: ICharacterQuery;
  locationQuery: ILocationQuery;
  episodeQuery: IEpisodeQuery;
  searchByKeyQuery: IKeyQuery;
}

export interface IQueryByProperty extends IQuery {
  properties: Array<PropertyType>;
}
