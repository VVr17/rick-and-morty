import { useLocation } from 'react-router';
import { ICharactersState, IEpisodesState, ILocationsState } from 'types';
import { PATHNAME } from 'constants/pathname';
import { RootState } from 'app/redux/store';
import { selectCharacters } from 'app/redux/characters';
import { selectEpisodes } from 'app/redux/episodes';
import { selectLocations } from 'app/redux/locations';
import { useAppSelector } from 'app/redux/hooks';

type ApiData = ICharactersState | IEpisodesState | ILocationsState;

export const useSelectData = () => {
  const location = useLocation();
  const { characters, episodes, locations } = PATHNAME;

  const apiSelectors: Record<string, (state: RootState) => ApiData> = {
    [characters]: selectCharacters,
    [episodes]: selectEpisodes,
    [locations]: selectLocations,
  };

  const { totalPages, data, isLoading, error, info } = useAppSelector(
    apiSelectors[location.pathname]
  );

  return { totalPages, data, isLoading, error, info: info ? info : null };
};
