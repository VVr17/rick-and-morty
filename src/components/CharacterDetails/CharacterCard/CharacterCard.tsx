import React from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

import { CharacterType } from 'types';

import Actions from 'components/Actions';
import Description from './Description';

interface IProps {
  character: CharacterType;
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
      <Actions type="details" />
    </Box>
  );
};

export default CharacterCard;
