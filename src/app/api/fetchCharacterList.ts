import { apolloClient } from 'app/graphql';
import { FETCH_CHARACTER_LIST } from 'services/characterService';
import { getGraphqlVariables } from 'utils/fetchUtils';

export const fetchCharactersList = async (query: ISearchQuery) => {
  const variables = query.property.includes('character')
    ? getGraphqlVariables(query, 'character')
    : getGraphqlVariables(query);

  const response = await apolloClient.query({
    query: FETCH_CHARACTER_LIST,
    variables,
  });

  return response;
};
