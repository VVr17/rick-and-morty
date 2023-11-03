export interface IFormFields {
  search: string;
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
  episode: string;
}
