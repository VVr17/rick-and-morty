import React from 'react';
import { useNavigate } from 'react-router';
import { Box } from '@mui/system';

import { BackButton } from 'components/common/buttons';
import CharacterCard from './CharacterCard';
import Container from 'components/Container';
import { CharacterType } from 'types';

interface IProps {
  character: CharacterType;
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
