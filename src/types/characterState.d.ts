import { FetchCharacterById_character } from 'services/characterService';

interface ICharacterState {
  data: FetchCharacterById_character | null;
  isLoading: boolean;
  error: string | null;
}
