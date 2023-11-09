import { CharacterType, LocationType } from 'types';

/**
 * Filter an array of characters based on a search query and property type.
 *
 * @param characters - An array of characters to filter.
 * @param query - The search query containing filter parameters.
 * @param propertyType - The type of property for filtering ('location', 'episode').
 * @returns An array of character IDs that match the search criteria.
 */
export const filterCharacters = (
  characters: CharacterType[],
  query: ISearchQuery,
  propertyType: PropertyType
): number[] => {
  return characters
    .filter(character => {
      if (propertyType === 'location') {
        return getCharacterMatch(character, query);
      }

      return (
        getLocationMatch(character.location, query) &&
        getCharacterMatch(character, query)
      );
    })
    .map(({ id }) => Number(id))
    .filter(id => !isNaN(id));
};

/**
 * Perform a case-insensitive inclusion match between a query value and a character value.
 *
 * @param queryValue - The query value to match.
 * @param characterValue - The character value to match.
 * @returns true if the query value is included in the character value, false otherwise.
 */
const matchQuery = (
  queryValue: string | null,
  characterValue: string | null
) => {
  return (
    !queryValue ||
    characterValue?.toLowerCase().includes(queryValue.toLowerCase())
  );
};

/**
 * Perform a case-insensitive equality match between a query value and a character value.
 *
 * @param queryValue - The query value to match.
 * @param characterValue - The character value to match.
 * @returns true if the query value is equal to the character value, false otherwise.
 */
const isEqual = (queryValue: string | null, characterValue: string | null) => {
  return (
    !queryValue || characterValue?.toLowerCase() === queryValue.toLowerCase()
  );
};

/**
 * Check if a character matches the search query for character-related fields.
 *
 * @param character - The character to check.
 * @param query - The search query containing filter parameters.
 * @returns true if the character matches the search criteria, false otherwise.
 */
const getCharacterMatch = (character: CharacterType, query: ISearchQuery) => {
  const { name, type, gender, status, species } = query;

  return (
    matchQuery(name, character.name) &&
    isEqual(status, character.status) &&
    isEqual(gender, character.gender) &&
    matchQuery(species, character.species) &&
    matchQuery(type, character.type)
  );
};

/**
 * Check if a character's location matches the search query for location-related fields.
 *
 * @param characterLocation - The location of the character.
 * @param query - The search query containing location filter parameters.
 * @returns true if the character's location matches the search criteria, false otherwise.
 */
const getLocationMatch = (
  characterLocation: LocationType,
  query: ISearchQuery
) => {
  if (!characterLocation) return false;

  const { locationName, locationType, dimension } = query;

  return (
    matchQuery(locationName, characterLocation.name) &&
    matchQuery(locationType, characterLocation.type) &&
    matchQuery(dimension, characterLocation.dimension)
  );
};
