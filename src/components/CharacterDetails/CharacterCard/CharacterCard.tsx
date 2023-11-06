import React from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

import { FetchCharacterById_character } from 'services/characterService/__generated__/FetchCharacterById';
import Description from './Description';
import Actions from 'components/Actions';

interface IProps {
  character: FetchCharacterById_character;
}

const CharacterCard: React.FC<IProps> = ({ character }) => {
  const { image } = character;

  return (
    <Box bgcolor="background.default" display="flex" position="relative">
      <Avatar
        alt="name"
        src={image ? image : '/assets/images/fallback.jpeg'}
        variant="square"
        sx={{ width: 595, height: 572 }}
      />
      <Description character={character} />
      <Actions />
    </Box>
  );
};

export default CharacterCard;
