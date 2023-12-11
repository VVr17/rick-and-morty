import React from 'react';
import { Typography } from '@mui/material';

import { BackButton } from 'components/common/buttons';
import { CharacterType } from 'types';
import DetailsTitle from './DetailsTitle';
import EntitiesList from 'components/Entities/EntitiesList';
import Section from 'components/common/Section';

interface IProps {
  characters: CharacterType[];
  title: string;
  subTitle: string;
}

const Details: React.FC<IProps> = ({ characters, title, subTitle }) => {
  return (
    <Section>
      <BackButton />
      <DetailsTitle title={title} subTitle={subTitle} />

      {characters && characters.length > 0 && (
        <EntitiesList data={characters} isDetailsPage />
      )}

      {characters && !characters.length && (
        <Typography component="p" variant="h3">
          Sorry, no characters were found based on your request.
        </Typography>
      )}
    </Section>
  );
};

export default Details;
