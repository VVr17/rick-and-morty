import * as yup from 'yup';
import {
  gender,
  properties,
  status,
} from 'constants/filter/filterSelectValues';
import { episodeRegEx } from './RegEx';

export const filterSchema = yup.object().shape({
  search: yup
    .string()
    .min(3)
    .transform(value => (value ? value : null))
    .nullable(),
  property: yup.array().of(yup.string().oneOf(properties)),

  name: yup
    .string()
    .min(3)
    .transform(value => (value ? value : null))
    .nullable(),
  status: yup
    .string()
    .oneOf(status)
    .transform(value => (value ? value : null))
    .nullable(),
  species: yup
    .string()
    .min(3)
    .transform(value => (value ? value : null))
    .nullable(),
  type: yup
    .string()
    .min(3)
    .transform(value => (value ? value : null))
    .nullable(),
  gender: yup
    .string()
    .oneOf(gender)
    .transform(value => (value ? value : null))
    .nullable(),

  locationName: yup
    .string()
    .min(3)
    .transform(value => (value ? value : null))
    .nullable(),
  locationType: yup
    .string()
    .min(3)
    .transform(value => (value ? value : null))
    .nullable(),
  dimension: yup
    .string()
    .min(3)
    .transform(value => (value ? value : null))
    .nullable(),

  episodeName: yup
    .string()
    .min(3)
    .transform(value => (value ? value : null))
    .nullable(),
  episode: yup
    .string()
    .matches(episodeRegEx, 'Episode S01E01, 5 seasons, 11 episodes')
    .transform(value => (value ? value : null))
    .nullable(),
});
