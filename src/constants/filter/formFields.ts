import {
  genders,
  locationTypes,
  specieses,
  statuses,
} from './filterSelectValues';

export const characterFormFields = [
  { name: 'name', placeholder: 'Add character name' },
  {
    name: 'status',
    placeholder: 'Add character status',
    options: ['', ...statuses],
  },
  {
    name: 'species',
    placeholder: 'Add character species',
    options: ['', ...specieses],
  },
  { name: 'type', placeholder: 'Add character type' },
  {
    name: 'gender',
    placeholder: 'Add character gender',
    options: ['', ...genders],
  },
];

export const locationFormFields = [
  { name: 'locationName', placeholder: 'Add location name' },
  {
    name: 'locationType',
    placeholder: 'Add location type',
    options: ['', ...locationTypes],
  },
  { name: 'dimension', placeholder: 'Add dimension' },
];

export const episodeFormFields = [
  { name: 'episodeName', placeholder: 'Add episode name' },
  { name: 'episode', placeholder: 'Add episode code' },
];
