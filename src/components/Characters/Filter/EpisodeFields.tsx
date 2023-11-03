import Field from 'components/common/form/Field';
import React from 'react';
import { Control } from 'react-hook-form';

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
