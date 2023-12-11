import { ILocations } from './locations';

export interface ILocationsState extends ILocations {
  isLoading: boolean;
  error: string | null;
}
