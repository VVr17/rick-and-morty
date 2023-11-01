import React from 'react';
import { Box } from '@mui/system';

import { useTheme } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { FetchCharacterById_character } from 'services/characterService/__generated__/FetchCharacterById';

interface IProps {
  character: FetchCharacterById_character;
}

const CharacterCard: React.FC<IProps> = ({ character }) => {
  const theme = useTheme();
  const { id, name, image, episode, species, location, status } = character;

  return (
    <Box
      bgcolor={'white'}
      display="flex"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Avatar
        alt="name"
        src={image ? image : ''}
        variant="square"
        sx={{ width: 229, height: 220 }}
      />
      <Box pt={1.5} pl={1.5}>
        <p>{name}</p>

        <p>
          {status} {species}
        </p>
        <p>Last known location:</p>
        <p>{location?.name}</p>
        <p>First seen in:</p>

        <p>{episode[0]?.name}</p>
      </Box>
    </Box>
  );
};

export default CharacterCard;
