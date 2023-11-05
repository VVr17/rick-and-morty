import { PropertyType } from 'types/filterFields';
import { ISearchQuery } from 'types/searchQuery';

interface IVariables {
  [key: string]: string | number;
}

export const getGraphqlVariables = (
  query: ISearchQuery,
  propertyType: PropertyType
): IVariables => {
  const {
    page,
    search,
    name,
    type,
    gender,
    status,
    species,
    locationName,
    locationType,
    dimension,
    episode,
    episodeName,
  } = query;

  if (propertyType === 'character') {
    return {
      page,
      ...(name && { name }),
      ...(status && { status }),
      ...(type && { type }),
      ...(gender && { gender }),
      ...(species && { species }),
    };
  }

  if (propertyType === 'location') {
    return {
      ...(locationName && { name: locationName }),
      ...(locationType && { type: locationType }),
      ...(dimension && { dimension }),
    };
  }

  if (propertyType === 'episode') {
    return {
      ...(episode && { episode }),
      ...(episodeName && { name: episodeName }),
    };
  }

  return {
    page,
    ...(name && { name: search }),
    // ...(type && { type: search }),
    // ...(species && { species: search }),
  };
};
