import { apolloClient } from 'app/graphql';
import { FETCH_LOCATIONS } from 'services/locationService';
import { getGraphqlVariables } from 'utils/fetchUtils';

export const fetchLocations = async (query: ISearchQuery) => {
  const variables = getGraphqlVariables(query, 'location');

  const response = await apolloClient.query({
    query: FETCH_LOCATIONS,
    variables,
  });

  return response;
};
