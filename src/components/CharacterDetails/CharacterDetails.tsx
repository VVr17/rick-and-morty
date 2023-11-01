import React from 'react';
import { Box } from '@mui/system';
import Container from 'components/Container';
import { useTheme } from '@mui/material/styles';
import { FetchCharacterById_character } from 'services/characterService/__generated__/FetchCharacterById';
import CharacterCard from './CharacterCard';

interface IProps {
  character: FetchCharacterById_character;
}

const CharacterDetails: React.FC<IProps> = ({ character }) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      pt="80px"
      pb="252px"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
      }}
    >
      <Container>
        <CharacterCard character={character} />
      </Container>
    </Box>
  );
};

export default CharacterDetails;
