import React from 'react';
import { Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';

import { CharacterType } from 'types/character';
import Description from './Description';

interface IProps {
  character: CharacterType;
}

const Item: React.FC<IProps> = ({ character }) => {
  const { image } = character;

  return (
    <Grid component="li" item xs={6}>
      <Box bgcolor="background.default" display="flex">
        <Avatar
          alt="name"
          src={image ? image : '/assets/images/fallback.jpeg'}
          variant="square"
          sx={{ width: 229, height: 220 }}
        />
        <Description character={character} />
      </Box>
    </Grid>
  );
};

export default Item;
