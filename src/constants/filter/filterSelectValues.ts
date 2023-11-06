import { GenderType, PropertyType, StatusType } from 'types/filterFields';

export const properties: PropertyType[] = ['character', 'location', 'episode'];
export const statuses: StatusType[] = ['alive', 'dead', 'unknown'];
export const genders: GenderType[] = [
  'female',
  'male',
  'genderless',
  'unknown',
];
