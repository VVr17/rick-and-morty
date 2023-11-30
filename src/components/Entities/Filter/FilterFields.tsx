import React from 'react';
import { Control } from 'react-hook-form';
import { Field, FormSelect } from 'components/common/form';

interface IProps {
  control: Control<any>;
  formFields: IFormField[];
}
const FilterFields: React.FC<IProps> = ({ formFields, control }) => {
  return (
    <>
      {formFields.map(({ name, options, placeholder }) =>
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

export default FilterFields;
