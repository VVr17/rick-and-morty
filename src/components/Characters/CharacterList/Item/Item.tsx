import React from 'react';
import { Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';

import { CharacterType } from 'types';
import { useMedia } from 'utils/hooks';

import Description from './Description';
import { avatarStyles } from './styles';

interface IProps {
  character: CharacterType;
}

const Item: React.FC<IProps> = ({ character }) => {
  const { image, name } = character;
  const { isXs } = useMedia(); // Styles

  return (
    <Grid component="li" item xs={12} md={6}>
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
    </Grid>
  );
};

export default Item;
