import React from 'react';
import { Avatar, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { CharacterType } from 'types';
import Description from './Description';
import { avatarStyles } from './styles';

interface IProps {
  character: CharacterType;
}

const Item: React.FC<IProps> = ({ character }) => {
  const { image, name } = character;

  // Styles
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            width: isMobile ? 180 : 229,
          }}
        />
        <Description character={character} />
      </Box>
    </Grid>
  );
};

export default Item;
