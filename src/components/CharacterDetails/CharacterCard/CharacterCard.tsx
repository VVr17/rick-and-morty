import React from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

import Actions from 'components/Actions';
import { CharacterType } from 'types';
import Description from './Description';
import { avatarStyles } from './styles';

interface IProps {
  character: CharacterType;
}

const CharacterCard: React.FC<IProps> = ({ character }) => {
  const { image } = character;

  return (
    <Box
      bgcolor="background.default"
      display="flex"
      position="relative"
      borderRadius={9}
    >
      <Avatar
        alt="name"
        src={image ? image : '/assets/images/fallback.jpeg'}
        variant="square"
        sx={avatarStyles}
      />
      <Description character={character} />
      <Actions type="details" />
    </Box>
  );
};

export default CharacterCard;
