import React from 'react';
import { Box } from '@mui/system';

import { getLocationDescription } from 'utils/location';
import { LocationType } from 'types';
import { PATHNAME } from 'constants/pathname';
import {
  CardTitle,
  DescriptionTitle,
  Details,
} from 'components/common/entityCard';

interface IProps {
  location: LocationType;
}

const LocationDescription: React.FC<IProps> = ({ location }) => {
  const { id, name, type, dimension } = location;
  const description = getLocationDescription(type, dimension);

  return (
    <Box p={2}>
      {location && (
        <>
          {id && name && (
            <CardTitle
              type="locations"
              id={id}
              name={name}
              href={`${PATHNAME.locations}/${id}`}
            />
          )}

          {description.map(({ title, value }, index) => (
            <Box key={index} display="flex" gap={2} alignItems="center">
              <DescriptionTitle message={title} />
              <Details content={value} />
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default LocationDescription;
