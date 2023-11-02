export type FormValues = {
  search: string; // search by key word --> search by character - by name, species, type
  property: Array<'character' | 'location' | 'episode'>;
  name: string;
  status: 'alive' | 'dead' | 'unknown' | string;
  species: string;
  type: string;
  gender: 'female' | 'male' | 'genderless' | 'unknown' | string;

  locationName: string;
  locationType: string;
  dimension: string;

  episodeName: string;
  episode: string; // (episode code) validation "S01E01" -> from S01E01-S01E11 / S02E01-S02E10 / S03E01-S03E10 / S04E01-S04E10 / S05E01-S05E10
};
