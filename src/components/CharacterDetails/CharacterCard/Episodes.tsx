import React from 'react';
import { Grid } from '@mui/material';
import { EpisodeType } from 'types';
import { MAX_EPISODE_QUANTITY } from 'constants/listConstants';

interface IProps {
  episodes: (EpisodeType | null)[];
}

const Episodes: React.FC<IProps> = ({ episodes }) => {
  const episodeList =
    episodes.length < MAX_EPISODE_QUANTITY
      ? episodes
      : episodes.slice(0, MAX_EPISODE_QUANTITY);

  return (
    <Grid component="ul" container spacing={2} mb={3.25}>
      {episodeList.map(
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
