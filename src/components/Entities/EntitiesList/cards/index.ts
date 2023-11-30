import CharacterCard from './CharacterCard/CharacterCard';
import SecondaryCard from './SecondaryCard/SecondaryCard';
import { PATHNAME } from 'constants/pathname';

export const cardComponentMap: Record<string, React.FC<any>> = {
  [PATHNAME.characters]: CharacterCard,
  [PATHNAME.episodes]: SecondaryCard,
  [PATHNAME.locations]: SecondaryCard,
};
