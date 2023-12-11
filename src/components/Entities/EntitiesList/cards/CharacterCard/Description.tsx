import React, { Fragment } from 'react';
import { Box } from '@mui/system';

import { CharacterType } from 'types';
import { getDescriptionFields } from 'utils/character';
import { PATHNAME } from 'constants/pathname';

import {
  CardTitle,
  CharacterStatus,
  DescriptionTitle,
  Details,
} from 'components/common/entityCard';

interface IProps {
  character: CharacterType;
}

const Description: React.FC<IProps> = ({ character }) => {
  const { id, name, episode, species, location, status, gender } = character;
  const descriptionFields = getDescriptionFields('list', location, episode[0]);

  return (
    <Box p={1.5} width="100%">
      {name && id && (
        <CardTitle
          type="characters"
          href={`${PATHNAME.characters}/${id}`}
          name={name}
          id={id}
        />
      )}

      {species && status && gender && (
        <CharacterStatus
          type="list"
          species={species}
          status={status}
          gender={gender}
        />
      )}

      {descriptionFields.map(({ title, value }, index, array) => (
        <Fragment key={index}>
          <DescriptionTitle message={title} />
          <Details content={value} mb={index !== array.length - 1 ? 1.75 : 0} />
        </Fragment>
      ))}
    </Box>
  );
};

export default Description;
