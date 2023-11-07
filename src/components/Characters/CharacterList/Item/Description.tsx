import React from 'react';
import { Box } from '@mui/system';

import { CharacterType } from 'types/character';
import { setHistoryItem } from 'app/redux/history/historySlice';
import { useAppDispatch } from 'app/redux/hooks';

import {
  CharacterStatus,
  DescriptionTitle,
  Details,
} from 'components/common/character';
import { LinkStyled } from './Item.styled';

interface IProps {
  character: CharacterType;
}

const Description: React.FC<IProps> = ({ character }) => {
  const dispatch = useAppDispatch();
  const { id, name, episode, species, location, status, gender } = character;

  // Add character page visit to history
  const addToHistory = () => {
    dispatch(setHistoryItem(`Передивився інформацію що до ${name}`));
  };

  return (
    <Box pt={1.5} pl={1.5}>
      <LinkStyled to={`${id}`} onClick={addToHistory}>
        {name}
      </LinkStyled>

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
