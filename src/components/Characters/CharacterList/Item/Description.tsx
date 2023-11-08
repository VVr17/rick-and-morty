import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';

import { CharacterType } from 'types';
import { getDescriptionFields } from 'utils/character';
import { setHistoryItem } from 'app/redux/history';
import { useAppDispatch } from 'app/redux/hooks';

import {
  CharacterStatus,
  DescriptionTitle,
  Details,
} from 'components/common/character';
import { linkStyles } from './styles';

interface IProps {
  character: CharacterType;
}

const Description: React.FC<IProps> = ({ character }) => {
  const dispatch = useAppDispatch();
  const { id, name, episode, species, location, status, gender } = character;
  const descriptionFields = getDescriptionFields(location, episode[0]);

  // Add character page visit to history
  const addToHistory = () => {
    dispatch(setHistoryItem(`Передивився інформацію що до ${name}`));
  };

  return (
    <Box p={1.5} width="100%">
      <Link
        component={RouterLink}
        to={`${id}`}
        onClick={addToHistory}
        color="secondary.main"
        underline="none"
        sx={linkStyles}
      >
        <Typography fontWeight={800} variant="h5" component="span">
          {name}
        </Typography>
      </Link>

      {species && status && gender && (
        <CharacterStatus
          type="list"
          species={species}
          status={status}
          gender={gender}
        />
      )}

      {descriptionFields.map(({ title, value }, index) => (
        <Fragment key={index}>
          <DescriptionTitle message={title} />
          <Details content={value} mb={1.75} />
        </Fragment>
      ))}
    </Box>
  );
};

export default Description;
