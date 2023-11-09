import React, { Fragment } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { CharacterType } from 'types';
import {
  CharacterStatus,
  DescriptionTitle,
  Details,
} from 'components/common/character';
import Episodes from './Episodes';
import { getDescriptionFields } from 'utils/character';

interface IProps {
  character: CharacterType;
}

const Description: React.FC<IProps> = ({ character }) => {
  const { name, gender, episode, species, location, status } = character;
  const descriptionFields = getDescriptionFields(
    'details',
    location,
    episode[0]
  );

  return (
    <Box pt={1.5} pl={5}>
      <Typography fontSize={27} fontWeight={800}>
        {name}
      </Typography>

      {species && status && gender && (
        <CharacterStatus
          type="details"
          species={species}
          status={status}
          gender={gender}
        />
      )}

      {descriptionFields.map(({ title, value, option }, index, array) => (
        <Fragment key={index}>
          <DescriptionTitle message={title} />
          <Details
            content={value}
            mb={option ? 0 : index === array.length - 1 ? 4 : 1.75}
          />
          {option && <Details content={option} mb={1.75} />}
        </Fragment>
      ))}

      <DescriptionTitle message="Other Info - episodes:" />
      {episode.length && <Episodes episodes={episode} />}
    </Box>
  );
};

export default Description;
