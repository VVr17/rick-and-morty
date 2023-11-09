import { apolloClient } from 'app/graphql';
import { FETCH_CHARACTERS_BY_IDS } from 'services/characterService';

export const fetchCharacterListByIds = async (
  currentCharacterIds: number[]
) => {
  const response = await apolloClient.query({
    query: FETCH_CHARACTERS_BY_IDS,
    variables: { ids: currentCharacterIds },
  });

  return response;
};
