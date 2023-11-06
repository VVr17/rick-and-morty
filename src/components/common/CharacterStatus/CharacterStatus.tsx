import React from 'react';
import { Box } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@mui/material';

import { getStatusColor } from 'utils/character/getStatusColor';

interface IProps {
  type: 'list' | 'details';
  status: string;
  species: string;
  gender: string;
}

const CharacterStatus: React.FC<IProps> = ({
  type,
  status,
  species,
  gender,
}) => {
  const statusColor = getStatusColor(status.toLowerCase());
  return (
    <Box
      display="flex"
      gap={1}
      alignItems="center"
      mb={1.5}
      color="text.secondary"
    >
      <CircleIcon sx={{ width: 10, height: 10 }} color={statusColor} />
      <Typography
        color="primary.light"
        textTransform="capitalize"
        fontWeight={type === 'details' ? 500 : 400}
      >
        {`${status && status} - ${species && species} ${
          type === 'details' && gender ? `- ${gender}` : ''
        }`}
      </Typography>
    </Box>
  );
};

export default CharacterStatus;
