import React from 'react';
import { BackButton } from 'components/common/buttons';
import { CharacterType } from 'types';
import CharacterCard from './CharacterCard';
import Section from 'components/common/Section';

interface IProps {
  character: CharacterType | null;
}

const CharacterDetails: React.FC<IProps> = ({ character }) => {
  return (
    <Section>
      <BackButton />
      {character && <CharacterCard character={character} />}
    </Section>
  );
};

export default CharacterDetails;
