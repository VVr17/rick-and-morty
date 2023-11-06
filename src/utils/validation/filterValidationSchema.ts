import * as yup from 'yup';
import { episodeRegEx } from './RegEx';
import { filterFields } from 'constants/filter/filterFields';
import {
  genders,
  properties,
  statuses,
} from 'constants/filter/filterSelectValues';

export const filterSchema = yup
  .object()
  .shape({
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
      .oneOf(statuses)
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
      .oneOf(genders)
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
  })
  .test({
    name: 'required-fields',
    exclusive: true, // Ensure the following test doesn't interfere with other field validation
    test: function (values) {
      const chosenProperties = values.property || [];
      const characterFields = filterFields.slice(0, 5);
      const locationFields = filterFields.slice(5, 8);
      const episodeFields = filterFields.slice(8, 10);

      if (!chosenProperties.length && !values.search) {
        return this.createError({
          path: 'search',
          message: 'At least one field should be filled in',
        });
      }

      const characterFieldsAreEmpty =
        chosenProperties.includes(properties[0]) &&
        characterFields.every(field => !values[field]);

      const locationFieldsAreEmpty =
        chosenProperties.includes(properties[1]) &&
        locationFields.every(field => !values[field]);

      const episodeFieldsAreEmpty =
        chosenProperties.includes(properties[2]) &&
        episodeFields.every(field => !values[field]);

      if (characterFieldsAreEmpty) {
        // This error will be associated with the 'name' field
        return this.createError({
          path: 'name',
          message: 'At least one character field should be filled in',
        });
      }

      if (locationFieldsAreEmpty) {
        // This error will be associated with the 'locationName' field
        return this.createError({
          path: 'locationName',
          message: 'At least one location field should be filled in',
        });
      }

      if (episodeFieldsAreEmpty) {
        // This error will be associated with the 'episodeName' field
        return this.createError({
          path: 'episodeName',
          message: 'At least one episode field should be filled in',
        });
      }
      return true; // Validation passes for other cases
    },
  });
