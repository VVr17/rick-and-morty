import { getPropertyState } from './getPropertyState';
import { UseFormSetValue } from 'react-hook-form';
import { IFilterFields } from 'types/filterForm';

export const resetFields = (
  chosenProperties: string[],
  setValue: UseFormSetValue<IFilterFields>
): void => {
  const { characterChosen, locationChosen, episodeChosen } =
    getPropertyState(chosenProperties);
  const fieldsToReset: (keyof IFilterFields)[] = [];

  if (chosenProperties.length) {
    fieldsToReset.push('search');
  }

  if (!characterChosen) {
    fieldsToReset.push('name', 'status', 'species', 'type', 'gender');
  }

  if (!locationChosen) {
    fieldsToReset.push('locationName', 'locationType', 'dimension');
  }

  if (!episodeChosen) {
    fieldsToReset.push('episodeName', 'episode');
  }

  if (fieldsToReset.length) {
    fieldsToReset.forEach(fieldName => {
      setValue(fieldName, '');
    });
  }
};
