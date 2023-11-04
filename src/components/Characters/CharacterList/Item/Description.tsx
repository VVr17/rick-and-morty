import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

import { FetchCharacterList_characters_results } from 'services/characterService/__generated__/FetchCharacterList';
import { LinkStyled } from './Item.styled';
import { CharacterType } from 'types/characterListState';

interface IProps {
  character: CharacterType;
}

const Description: React.FC<IProps> = ({ character }) => {
  const { id, name, episode, species, location, status } = character;

  return (
    <Box pt={1.5} pl={1.5}>
      <LinkStyled to={`${id}`}>{name}</LinkStyled>

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
  );
};

export default Description;
