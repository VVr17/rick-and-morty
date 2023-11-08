import { FilterField } from 'types/filterFields';

export const characterFields: FilterField[] = [
  'name',
  'status',
  'species',
  'type',
  'gender',
];

export const locationFields: FilterField[] = [
  'locationName',
  'locationType',
  'dimension',
];

export const episodeFields: FilterField[] = ['episodeName', 'episode'];

export const filterFields: FilterField[] = [
  ...characterFields,
  ...locationFields,
  ...episodeFields,
  'search',
];
