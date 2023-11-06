import React from 'react';
import { Grid } from '@mui/material';
import { FetchCharacterById_character_episode } from 'services/characterService/__generated__/FetchCharacterById';

interface IProps {
  episodes: (FetchCharacterById_character_episode | null)[];
}

const Episodes: React.FC<IProps> = ({ episodes }) => {
  return (
    <Grid component="ul" container spacing={2} mb={3.25}>
      {episodes.map(
        episode =>
          episode && (
            <Grid component="li" item xs={6} key={episode.id}>
              <p>{episode.name}</p>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default Episodes;
