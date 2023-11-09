import React from 'react';
import { Control } from 'react-hook-form';

import { characterFormFields } from 'constants/filter';
import { Field, FormSelect } from 'components/common/form';

interface IProp {
  control: Control<any>;
}

const CharacterFields: React.FC<IProp> = ({ control }) => {
  return (
    <>
      {characterFormFields.map(({ name, options, placeholder }) =>
        options ? (
          <FormSelect
            key={name}
            name={name}
            type="radio"
            control={control}
            placeholder={placeholder}
            options={options}
          />
        ) : (
          <Field
            key={name}
            name={name}
            control={control}
            placeholder={placeholder}
          />
        )
      )}
    </>
  );
};

export default CharacterFields;