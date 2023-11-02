import Field from 'components/common/form/Field';
import SingleSelect from 'components/common/form/SingleSelect';
import { gender, status } from 'constants/filter/filterSelectValues';
import React from 'react';
import { Control } from 'react-hook-form';

interface IProp {
  control: Control<any>;
}

const CharacterFields: React.FC<IProp> = ({ control }) => {
  return (
    <>
      <Field name="name" control={control} placeholder="Character name" />
      <SingleSelect
        control={control}
        name="status"
        placeholder="Character status"
        options={status}
      />
      <Field name="species" control={control} placeholder="Character species" />
      <Field name="type" control={control} placeholder="Character type" />
      <SingleSelect
        control={control}
        name="gender"
        placeholder="Character gender"
        options={gender}
      />
    </>
  );
};

export default CharacterFields;
