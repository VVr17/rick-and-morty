import React from 'react';
import { Box } from '@mui/system';

import { Avatar, Typography } from '@mui/material';
import { FetchCharacterById_character } from 'services/characterService/__generated__/FetchCharacterById';
import CircleIcon from '@mui/icons-material/Circle';

interface IProps {
  character: FetchCharacterById_character;
}

const CharacterCard: React.FC<IProps> = ({ character }) => {
  const { id, name, image, episode, species, location, status } = character;

  return (
    <Box bgcolor="background.default" display="flex">
      <Avatar
        alt="name"
        src={image ? image : ''}
        variant="square"
        sx={{ width: 229, height: 220 }}
      />
      <Box pt={1.5} pl={1.5}>
        <Typography color="primary.light">{name}</Typography>

        <Box display="flex" gap={1} alignItems="center" mb={1.5}>
          <CircleIcon sx={{ width: 10, height: 10 }} />
          <Typography color="primary.light" textTransform="capitalize">
            {status} - {species}
          </Typography>
        </Box>

        <Typography color="text.secondary" fontSize={15} fontWeight={500}>
          Last known location:
        </Typography>
        <Typography fontSize={18} mb={1.75}>
          {location?.name}
        </Typography>

        <Typography color="text.secondary" fontSize={15} fontWeight={500}>
          First seen in:
        </Typography>
        <Typography fontSize={18}>{episode[0]?.name}</Typography>
      </Box>
    </Box>
  );
};

export default CharacterCard;
