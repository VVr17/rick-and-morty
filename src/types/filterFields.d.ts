export type FilterField =
  | 'name'
  | 'status'
  | 'species'
  | 'type'
  | 'gender'
  | 'search'
  | 'locationName'
  | 'locationType'
  | 'dimension'
  | 'episodeName'
  | 'episode';

export type PropertyType = 'character' | 'location' | 'episode';
export type GenderType = 'female' | 'male' | 'genderless' | 'unknown';
export type StatusType = 'alive' | 'dead' | 'unknown';
