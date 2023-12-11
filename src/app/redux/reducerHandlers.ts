import { ICharactersState, IEpisodesState, ILocationsState } from 'types';

export const handlePending = (
  state: ICharactersState | IEpisodesState | ILocationsState
) => {
  state.isLoading = true;
};

export const handleRejected = (
  state: ICharactersState | IEpisodesState | ILocationsState
) => {
  state.error = 'Error during fetch data';
  state.isLoading = false;
};
