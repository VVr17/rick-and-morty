import { ISearchQuery, IQueryByProperty } from 'types/searchQuery';

export const getQueriesByProperty = (
  searchQuery: ISearchQuery
): IQueryByProperty => {
  const {
    page,
    property,
    search,
    name,
    status,
    gender,
    type,
    species,
    locationName,
    locationType,
    dimension,
    episodeName,
    episode,
  } = searchQuery;

  const queryByProperty: IQueryByProperty = {
    properties: property,
    characterQuery: {
      page,
      name,
      status,
      type,
      gender,
      species,
    },
    locationQuery: {
      locationName,
      locationType,
      dimension,
    },
    episodeQuery: {
      episodeName,
      episode,
    },
    searchByKeyQuery: {
      page,
      name: search,
      type: search,
      species: search,
    },
  };

  return queryByProperty;
};
