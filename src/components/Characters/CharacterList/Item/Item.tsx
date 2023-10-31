import { Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { FetchCharacterList_characters_results } from 'services/characterService/__generated__/FetchCharacterList';
import { Link } from 'react-router-dom';

interface IProps {
  character: FetchCharacterList_characters_results;
}

const Card: React.FC<IProps> = ({ character }) => {
  const { id, name, image, episode, species, location, status } = character;
  const theme = useTheme();

  return (
    <Grid component="li" item xs={6}>
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
          <Link to={`${id}`}>{name}</Link>

          <p>
            {status} {species}
          </p>
          <p>Last known location:</p>
          <p>{location?.name}</p>
          <p>First seen in:</p>
          <p>{episode[0]?.name}</p>
        </Box>
      </Box>
    </Grid>
  );
};

export default Card;
