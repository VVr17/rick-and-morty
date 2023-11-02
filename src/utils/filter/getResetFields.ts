import { FormValues } from 'types/filterForm';
import { UseFormSetValue } from 'react-hook-form';

export const resetFields = (
  chosenProperties: string[],
  setValue: UseFormSetValue<FormValues>
): void => {
  const characterChosen = chosenProperties.includes('character');
  const locationChosen = chosenProperties.includes('location');
  const episodeChosen = chosenProperties.includes('episode');
  const fieldsToReset: (keyof FormValues)[] = [];

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
