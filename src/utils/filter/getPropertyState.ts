import { properties } from 'constants/filter';

/**
 * Get the state of chosen properties based on an array of property names.
 *
 * @param chosenProperties - An array of chosen property names ('location', 'character', 'episode').
 * @returns An object containing the state of chosen properties.
 */
export const getPropertyState = (chosenProperties: string[]) => {
  const propertyIsChosen = !!chosenProperties.length;
  const characterChosen = chosenProperties.includes(properties[0]);
  const locationChosen = chosenProperties.includes(properties[1]);
  const episodeChosen = chosenProperties.includes(properties[2]);

  return { propertyIsChosen, characterChosen, locationChosen, episodeChosen };
};
