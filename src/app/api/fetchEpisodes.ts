import { apolloClient } from 'app/graphql';
import { FETCH_EPISODES } from 'services/episodeService';
import { getGraphqlVariables } from 'utils/fetchUtils';

export const fetchEpisodes = async (query: ISearchQuery) => {
  const variables = getGraphqlVariables(query, 'episode');

  const response = await apolloClient.query({
    query: FETCH_EPISODES,
    variables,
  });

  return response;
};
