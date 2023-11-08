import React from 'react';
import { Control } from 'react-hook-form';
import { Field } from 'components/common/form';
import { episodeFormFields } from 'constants/filter';

interface IProp {
  control: Control<any>;
}

const EpisodeFields: React.FC<IProp> = ({ control }) => {
  return (
    <>
      {episodeFormFields.map(({ name, placeholder }, index) => (
        <Field
          key={index}
          name={name}
          control={control}
          placeholder={placeholder}
        />
      ))}
    </>
  );
};

export default EpisodeFields;
