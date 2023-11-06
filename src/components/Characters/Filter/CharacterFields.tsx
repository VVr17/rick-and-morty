import React from 'react';
import { Control } from 'react-hook-form';

import { genders, statuses } from 'constants/filter/filterSelectValues';
import Field from 'components/common/form/Field';
import SingleSelect from 'components/common/form/SingleSelect';

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
        options={statuses}
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
        options={genders}
      />
    </>
  );
};

export default CharacterFields;
