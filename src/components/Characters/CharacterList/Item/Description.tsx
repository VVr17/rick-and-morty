import React from 'react';
import { Box } from '@mui/system';

import { CharacterType } from 'types/character';
import CharacterStatus from 'components/common/CharacterStatus/CharacterStatus';
import DescriptionTitle from 'components/common/typography/DescriptionTitle';
import Details from 'components/common/typography/Details';
import { LinkStyled } from './Item.styled';

interface IProps {
  character: CharacterType;
}

const Description: React.FC<IProps> = ({ character }) => {
  const { id, name, episode, species, location, status, gender } = character;

  return (
    <Box pt={1.5} pl={1.5}>
      <LinkStyled to={`${id}`}>{name}</LinkStyled>

      {species && status && gender && (
        <CharacterStatus
          type="list"
          species={species}
          status={status}
          gender={gender}
        />
      )}

      <DescriptionTitle message="Last known location:" />
      <Details content={`Name: ${location?.name || '---'}`} mb={1.75} />

      <DescriptionTitle message="First seen in:" />
      <Details content={episode[0]?.name || '---'} />
    </Box>
  );
};

export default Description;
