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
      <Field name="name" control={control} placeholder="Add character name" />
      <SingleSelect
        control={control}
        name="status"
        placeholder="Add character status"
        options={status}
      />
      <Field
        name="species"
        control={control}
        placeholder="Add character species"
      />
      <Field name="type" control={control} placeholder="Add character type" />
      <SingleSelect
        control={control}
        name="gender"
        placeholder="Add character gender"
        options={gender}
      />
    </>
  );
};

export default CharacterFields;
