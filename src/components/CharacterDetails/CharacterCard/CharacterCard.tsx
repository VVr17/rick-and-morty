import { Box } from '@mui/system';
import { selectCurrentCharacter } from 'app/redux/currentCharacter/selectors';
import { useAppSelector } from 'app/redux/hooks';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar } from '@mui/material';

const CharacterCard = () => {
  const { data: currentCharacter } = useAppSelector(selectCurrentCharacter);
  const theme = useTheme();

  if (!currentCharacter) {
    return <p> Nothing found</p>;
  }

  const { id, name, image, episode, species, location, status } =
    currentCharacter;

  return (
    <Box
      bgcolor={'white'}
      display="flex"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Avatar
        alt="name"
        src={image ? image : ''}
        variant="square"
        sx={{ width: 229, height: 220 }}
      />
      <Box pt={1.5} pl={1.5}>
        <p>{name}</p>

        <p>
          {status} {species}
        </p>
        <p>Last known location:</p>
        <p>{location?.name}</p>
        <p>First seen in:</p>

        <p>{episode[0]?.name}</p>
      </Box>
    </Box>
  );
};

export default CharacterCard;
