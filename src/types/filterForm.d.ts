interface IFilterFields {
  search: string;
  property: Array<PropertyType>;
  name: string;
  status: StatusType | string;
  species: string;
  type: string;
  gender: GenderType | string;

  locationName: string;
  locationType: string;
  dimension: string;

  episodeName: string;
  episode: string;
}
