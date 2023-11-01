import React from 'react';
import { Box } from '@mui/system';
import { FetchCharacterById_character } from 'services/characterService/__generated__/FetchCharacterById';

import CharacterCard from './CharacterCard';
import Container from 'components/Container';

interface IProps {
  character: FetchCharacterById_character;
}

const CharacterDetails: React.FC<IProps> = ({ character }) => {
  return (
    <Box component="section" pt="80px" pb="252px" bgcolor="primary.main">
      <Container>
        <CharacterCard character={character} />
      </Container>
    </Box>
  );
};

export default CharacterDetails;
