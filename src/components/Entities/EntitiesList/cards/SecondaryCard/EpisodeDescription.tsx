import React from 'react';
import { Box } from '@mui/system';

import { EpisodeType } from 'types';
import { FALLBACK } from 'constants/listConstants';
import { PATHNAME } from 'constants/pathname';
import {
  CardTitle,
  DescriptionTitle,
  Details,
} from 'components/common/entityCard';

interface IProps {
  episode: EpisodeType;
}

const EpisodeDescription: React.FC<IProps> = ({ episode }) => {
  const { id, name } = episode;

  return (
    <Box p={2}>
      {episode && (
        <>
          {id && name && (
            <CardTitle
              type="episodes"
              id={id}
              name={name}
              href={`${PATHNAME.episodes}/${id}`}
            />
          )}

          <Box display="flex" gap={2} alignItems="center">
            <DescriptionTitle message="Episode" />
            <Details content={episode.episode || FALLBACK} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default EpisodeDescription;
