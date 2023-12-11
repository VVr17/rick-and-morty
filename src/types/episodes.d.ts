import { EpisodeType } from './episode';

export interface IEpisodes {
  data: EpisodeType[];
  totalPages: number;
  info?: string | null;
}
