import { GenderType, PropertyType, StatusType } from 'types/filterFields';

export const properties: PropertyType[] = ['character', 'location', 'episode'];
export const status: StatusType[] = ['alive', 'dead', 'unknown'];
export const gender: GenderType[] = ['female', 'male', 'genderless', 'unknown'];
