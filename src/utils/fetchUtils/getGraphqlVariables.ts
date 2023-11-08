import { ISearchQuery, PropertyType } from 'types';

/**
 * Generate GraphQL variables based on a search query and property type.
 *
 * @param query - The search query containing filter parameters.
 * @param propertyType - The type of property for filtering ('character', 'location', 'episode').
 * @returns GraphQL variables object with properties that match the provided query and property type.
 */
export const getGraphqlVariables = (
  query: ISearchQuery,
  propertyType?: PropertyType
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

  switch (propertyType) {
    case 'character':
      return {
        page,
        ...(name && { name }),
        ...(status && { status }),
        ...(type && { type }),
        ...(gender && { gender }),
        ...(species && { species }),
      };

    case 'location':
      return {
        ...(locationName && { name: locationName }),
        ...(locationType && { type: locationType }),
        ...(dimension && { dimension }),
      };

    case 'episode':
      return {
        ...(episode && { episode }),
        ...(episodeName && { name: episodeName }),
      };

    default:
      return {
        page,
        name: search,
      };
  }
};
