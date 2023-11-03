import Field from 'components/common/form/Field';
import React from 'react';
import { Control } from 'react-hook-form';

interface IProp {
  control: Control<any>;
}
const LocationFields: React.FC<IProp> = ({ control }) => {
  return (
    <>
      <Field
        name="locationName"
        control={control}
        placeholder="Add location name"
      />
      <Field
        name="locationType"
        control={control}
        placeholder="Add location type"
      />
      <Field name="dimension" control={control} placeholder="Add dimension" />
    </>
  );
};

export default LocationFields;
