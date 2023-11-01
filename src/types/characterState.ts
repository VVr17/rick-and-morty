import { FetchCharacterById_character } from 'services/characterService/__generated__/FetchCharacterById';

export interface ICharacterState {
  data: FetchCharacterById_character | null;
  isLoading: boolean;
  error: string | null;
}
