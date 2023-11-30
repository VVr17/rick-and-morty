import { PATHNAME } from 'constants/pathname';
import { useLocation } from 'react-router';

export const useFilterType = () => {
  const location = useLocation();
  const { characters, episodes, locations } = PATHNAME;

  const types = {
    [characters]: 'characters',
    [episodes]: 'episodes',
    [locations]: 'locations',
  };

  return types[location.pathname] as FilterType;
};
