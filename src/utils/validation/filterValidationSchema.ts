import * as yup from 'yup';
import {
  episodeNameRegEx,
  episodeRegEx,
  nameRegEx,
  stringRegEx,
} from './RegEx';
import {
  characterFields,
  episodeFields,
  genders,
  locationFields,
  properties,
  statuses,
  locationTypes,
  specieses,
} from 'constants/filter';

export const filterSchema = yup
  .object()
  .shape({
    search: yup
      .string()
      .min(3, 'Should be at least 3 characters')
      .max(50, 'Should be at most 50 characters')
      .transform(value => (value ? value.trim() : null))
      .nullable(),
    property: yup.array().of(yup.string().oneOf(properties)),

    name: yup
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters')
      .matches(nameRegEx, 'Can contain Latin letters and special symbols')
      .transform(value => (value ? value.trim() : null))
      .nullable(),

    status: yup
      .string()
      .oneOf(statuses)
      .transform(value => (value ? value.trim() : null))
      .nullable(),
    species: yup
      .string()
      .oneOf(specieses)
      .transform(value => (value ? value.trim() : null))
      .nullable(),
    type: yup
      .string()
      .min(3, 'Type must be at least 3 characters')
      .max(50, 'Type must be at most 50 characters')
      .matches(stringRegEx, 'Can contain Latin letters and special symbols')
      .transform(value => (value ? value.trim() : null))
      .nullable(),
    gender: yup
      .string()
      .oneOf(genders)
      .transform(value => (value ? value.trim() : null))
      .nullable(),

    locationName: yup
      .string()
      .min(3, 'Location must be at least 3 characters')
      .max(50, 'Location must be at most 50 characters')
      .matches(stringRegEx, 'Can contain Latin letters and special symbols')
      .transform(value => (value ? value.trim() : null))
      .nullable(),
    locationType: yup
      .string()
      .oneOf(locationTypes)
      .transform(value => (value ? value.trim() : null))
      .nullable(),
    dimension: yup
      .string()
      .min(3, 'Dimension must be at least 3 characters')
      .max(50, 'Dimension must be at most 50 characters')
      .matches(stringRegEx, 'Can contain Latin letters and special symbols')
      .transform(value => (value ? value.trim() : null))
      .nullable(),

    episodeName: yup
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be at most 50 characters')
      .matches(episodeNameRegEx, 'Can contain only Latin letters')
      .transform(value => (value ? value.trim() : null))
      .nullable(),
    episode: yup
      .string()
      .matches(episodeRegEx, 'Episode type: S01E01, 5 seasons, 11 episodes')
      .transform(value => (value ? value.trim() : null))
      .nullable(),
  })
  .test({
    name: 'required-fields',
    exclusive: true, // Ensure the following test doesn't interfere with other field validation
    test: function (values) {
      const chosenProperties = values.property || [];

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
