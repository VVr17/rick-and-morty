import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchCharacterList_characters_results } from 'services/characterService/__generated__/FetchCharacterList';

import { apolloClient } from 'app/graphql';
import { FETCH_CHARACTER_LIST } from 'services/characterService/queries';
import { IQuery } from 'types/searchQuery';
import { FETCH_EPISODES } from 'services/episodeService/queries';
import { FetchEpisodes_episodes_results_characters } from 'services/episodeService/__generated__/FetchEpisodes';

export const fetchCharacters = createAsyncThunk(
  'charactersByLocation/fetch',
  async (
    query: IQuery,
    { rejectWithValue }
  ): Promise<{
    characters: FetchCharacterList_characters_results[];
    totalPages: number;
  }> => {
    try {
      const response = await apolloClient.query({
        query: FETCH_CHARACTER_LIST,
        variables: query.characterQuery,
      });

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      const characters = response.data.characters
        .results as FetchCharacterList_characters_results[];

      const { locationName, locationType, dimension } = query.locationQuery;

      const filterByLocation = characters
        .filter(({ location }) =>
          location?.name?.toLowerCase().includes(locationName.toLowerCase())
        )
        .filter(({ location }) =>
          location?.type?.toLowerCase().includes(locationType.toLowerCase())
        )
        .filter(({ location }) =>
          location?.dimension?.toLowerCase().includes(dimension.toLowerCase())
        );

      return {
        characters: filterByLocation,
        totalPages: response.data.characters.info.pages,
      };
    } catch (error) {
      console.log('Error during fetch', error);
      throw error;
    }
  }
);

export const fetchCharactersByEpisode = createAsyncThunk(
  'charactersByEpisode/fetch',
  async (
    query: IQuery,
    { rejectWithValue }
  ): Promise<{
    characters: FetchEpisodes_episodes_results_characters[];
    totalPages: number;
  }> => {
    try {
      const response = await apolloClient.query({
        query: FETCH_EPISODES,
        variables: {
          episode: query.episodeQuery.episode,
          name: query.episodeQuery.episodeName,
        },
      });

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      const characters = response.data.episodes.results[0]
        .characters as FetchEpisodes_episodes_results_characters[];

      const { locationName, locationType, dimension } = query.locationQuery;
      const { name, type, gender, status, species } = query.characterQuery;

      const filteredCharacters = characters.filter(character => {
        const locationMatch =
          (!locationName ||
            character.location?.name
              ?.toLowerCase()
              .includes(locationName.toLowerCase())) &&
          (!locationType ||
            character.location?.type
              ?.toLowerCase()
              .includes(locationType.toLowerCase())) &&
          (!dimension ||
            character.location?.dimension
              ?.toLowerCase()
              .includes(dimension.toLowerCase()));

        const nameMatch =
          !name || character.name?.toLowerCase().includes(name.toLowerCase());
        const statusMatch =
          !status || character.status?.toLowerCase() === status.toLowerCase();
        const genderMatch =
          !gender || character.gender?.toLowerCase() === gender.toLowerCase();
        const speciesMatch =
          !species ||
          character.species?.toLowerCase().includes(species.toLowerCase());
        const typeMatch =
          !type || character.type?.toLowerCase().includes(type.toLowerCase());

        return (
          locationMatch &&
          nameMatch &&
          statusMatch &&
          genderMatch &&
          speciesMatch &&
          typeMatch
        );
      });

      return {
        characters: filteredCharacters,
        totalPages: response.data.episodes.info.pages,
      };
    } catch (error) {
      console.log('Error during fetch', error);
      throw error;
    }
  }
);
