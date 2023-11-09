import React from 'react';
import { Control } from 'react-hook-form';
import { Field } from 'components/common/form';
import { locationFormFields } from 'constants/filter';

interface IProp {
  control: Control<any>;
}

const LocationFields: React.FC<IProp> = ({ control }) => {
  return (
    <>
      {locationFormFields.map(({ name, placeholder }) => (
        <Field
          key={name}
          name={name}
          control={control}
          placeholder={placeholder}
        />
      ))}
    </>
  );
};

export default LocationFields;
