import React from 'react';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

import { CharacterType } from 'types';
import { useMedia } from 'utils/hooks';

import Description from './Description';
import { avatarStyles } from './styles';

interface IProps {
  character: CharacterType;
}

const CharacterCard: React.FC<IProps> = ({ character }) => {
  const { image, name } = character;
  const { isXs } = useMedia(); // Styles

  return (
    <Box
      bgcolor="background.default"
      display="flex"
      height="100%"
      borderRadius={3}
    >
      <Avatar
        src={image ? image : '/assets/images/fallback.jpeg'}
        alt={name || 'Avatar'}
        variant="square"
        sx={{
          ...avatarStyles,
          width: isXs ? 180 : 229,
        }}
      />
      <Description character={character} />
    </Box>
  );
};

export default CharacterCard;
