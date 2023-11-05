import React from 'react';
import { Control } from 'react-hook-form';
import Field from 'components/common/form/Field';

interface IProp {
  control: Control<any>;
}

const EpisodeFields: React.FC<IProp> = ({ control }) => {
  return (
    <>
      <Field
        name="episodeName"
        control={control}
        placeholder="Add episode name"
      />
      <Field name="episode" control={control} placeholder="Add episode code" />
    </>
  );
};

export default EpisodeFields;
