import React, { useEffect } from 'react';
import CharacterCard from 'components/CharacterDetails/CharacterCard';
import Hero from 'components/Hero';
import { useAppDispatch } from 'app/redux/hooks';
import { fetchCharacter } from 'app/redux/currentCharacter/currentCharacterOperations';
import { useParams } from 'react-router';
import CharacterDetails from 'components/CharacterDetails';

const Character = () => {
  const { characterId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (characterId) {
      dispatch(fetchCharacter(+characterId));
    }
  }, []);

  return (
    <>
      <Hero />
      <CharacterDetails />
    </>
  );
};

export default Character;
