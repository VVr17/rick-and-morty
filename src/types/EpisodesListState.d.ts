import { IEpisodes } from './episodes';

export interface IEpisodesState extends IEpisodes {
  isLoading: boolean;
  error: string | null;
}
