import React from 'react';
import { Box } from '@mui/system';

import { EpisodeType, LocationType } from 'types';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';

import EpisodeDescription from './EpisodeDescription';
import LocationDescription from './LocationDescription';

interface IProps {
  episode?: EpisodeType;
  location?: LocationType;
}

const SecondaryCard: React.FC<IProps> = ({ episode, location }) => {
  return (
    <Box
      bgcolor="background.default"
      height="100%"
      borderRadius={3}
      display="flex"
    >
      <Box
        color="action.hover"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth={72}
      >
        <LogoIcon fill="currentColor" />
      </Box>

      {episode && <EpisodeDescription episode={episode} />}
      {location && <LocationDescription location={location} />}
    </Box>
  );
};

export default SecondaryCard;
