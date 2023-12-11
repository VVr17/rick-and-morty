import React from 'react';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

import { CharacterType } from 'types';
import { useMedia } from 'utils/hooks';

import Actions from 'components/Actions';
import Description from './Description';
import { avatarStyles } from './styles';

interface IProps {
  character: CharacterType;
}

const CharacterCard: React.FC<IProps> = ({ character }) => {
  const { image, name } = character;
  const { isXs, isSm, isLgDown } = useMedia(); // Styles

  return (
    <Box
      bgcolor="background.default"
      display="flex"
      position="relative"
      flexDirection={isSm ? 'row' : 'column'}
      borderRadius={9}
    >
      <Avatar
        src={image ? image : '/assets/images/fallback.jpeg'}
        alt={name || 'avatar'}
        variant="square"
        sx={{
          ...avatarStyles,
          width: isXs ? '100%' : isLgDown ? 300 : 595,
          height: isXs ? 'auto' : isLgDown ? 300 : 572,
        }}
      />
      <Description character={character} />
      <Actions type="details" />
    </Box>
  );
};

export default CharacterCard;
