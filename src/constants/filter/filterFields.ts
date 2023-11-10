export const characterFields: FilterFieldName[] = [
  'name',
  'status',
  'species',
  'type',
  'gender',
];

export const locationFields: FilterFieldName[] = [
  'locationName',
  'locationType',
  'dimension',
];

export const episodeFields: FilterFieldName[] = ['episodeName', 'episode'];

export const filterFields: FilterFieldName[] = [
  ...characterFields,
  ...locationFields,
  ...episodeFields,
  'search',
];
