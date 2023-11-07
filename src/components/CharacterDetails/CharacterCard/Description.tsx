import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { FetchCharacterById_character } from 'services/characterService/__generated__/FetchCharacterById';
import Episodes from './Episodes';
import {
  CharacterStatus,
  DescriptionTitle,
  Details,
} from 'components/common/character';

interface IProps {
  character: FetchCharacterById_character;
}

const Description: React.FC<IProps> = ({ character }) => {
  const { name, gender, episode, species, location, status } = character;

  return (
    <Box pt={1.5} pl={5}>
      <Typography fontSize={27} fontWeight={800}>
        {name}
      </Typography>

      {species && status && gender && (
        <CharacterStatus
          type="list"
          species={species}
          status={status}
          gender={gender}
        />
      )}
      <DescriptionTitle message="Last known location:" />
      <Details content={`Name: ${location?.name || '---'}`} />
      <Details content={`Type: ${location?.type || '---'}`} mb={1.75} />

      <DescriptionTitle message="First seen in:" />
      <Details content={episode[0]?.name || '---'} mb={4} />

      <DescriptionTitle message="Other Info - episodes:" />
      {episode.length && <Episodes episodes={episode} />}
    </Box>
  );
};

export default Description;
