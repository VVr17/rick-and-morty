import React from 'react';
import { Grid } from '@mui/material';
import { EpisodeType } from 'types';

interface IProps {
  episodes: (EpisodeType | null)[];
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
