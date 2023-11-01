import React from 'react';
import { Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';

import { FetchCharacterList_characters_results } from 'services/characterService/__generated__/FetchCharacterList';
import Description from './Description';

interface IProps {
  character: FetchCharacterList_characters_results;
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
