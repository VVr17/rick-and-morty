import { properties } from 'constants/filter';

export const getPropertyState = (chosenProperties: string[]) => {
  const propertyIsChosen = !!chosenProperties.length;
  const characterChosen = chosenProperties.includes(properties[0]);
  const locationChosen = chosenProperties.includes(properties[1]);
  const episodeChosen = chosenProperties.includes(properties[2]);

  return { propertyIsChosen, characterChosen, locationChosen, episodeChosen };
};
