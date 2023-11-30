import { LocationType } from './location';

export interface ILocations {
  data: LocationType[];
  totalPages: number;
  info?: string | null;
}
