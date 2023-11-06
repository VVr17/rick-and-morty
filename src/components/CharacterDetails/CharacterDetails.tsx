import React from 'react';
import { useNavigate } from 'react-router';
import { Box } from '@mui/system';

import { FetchCharacterById_character } from 'services/characterService/__generated__/FetchCharacterById';

import BackButton from 'components/common/BackButton';
import CharacterCard from './CharacterCard';
import Container from 'components/Container';

interface IProps {
  character: FetchCharacterById_character;
}

const CharacterDetails: React.FC<IProps> = ({ character }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box component="section" pt="30px" pb="252px" bgcolor="primary.main">
      <Container>
        <BackButton goBack={goBack} />
        <CharacterCard character={character} />
      </Container>
    </Box>
  );
};

export default CharacterDetails;
