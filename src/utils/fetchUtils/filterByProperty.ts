import { CharacterType } from 'types/character';
import { PropertyType } from 'types/filterFields';
import { LocationType } from 'types/location';
import { ISearchQuery } from 'types/searchQuery';

export const filterCharacters = (
  characters: CharacterType[],
  query: ISearchQuery,
  propertyType: PropertyType
): CharacterType[] => {
  const filteredCharacters = characters.filter(character => {
    if (propertyType === 'location') {
      return getCharacterMatch(character, query);
    }

    return (
      getLocationMatch(character.location, query) &&
      getCharacterMatch(character, query)
    );
  });

  return filteredCharacters;
};

const getCharacterMatch = (character: CharacterType, query: ISearchQuery) => {
  const { name, type, gender, status, species } = query;
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

  return nameMatch && statusMatch && genderMatch && speciesMatch && typeMatch;
};

const getLocationMatch = (
  characterLocation: LocationType,
  query: ISearchQuery
) => {
  if (!characterLocation) {
    return !characterLocation;
  }

  const { locationName, locationType, dimension } = query;
  const nameMatch =
    !locationName ||
    characterLocation.name?.toLowerCase().includes(locationName.toLowerCase());

  const typeMatch =
    !locationType ||
    characterLocation.type?.toLowerCase().includes(locationType.toLowerCase());

  const dimensionMatch =
    !dimension ||
    characterLocation.dimension
      ?.toLowerCase()
      .includes(dimension.toLowerCase());

  return nameMatch && typeMatch && dimensionMatch;
};
