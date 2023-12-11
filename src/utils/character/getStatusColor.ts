import { STATUS } from 'constants/filter';

/**
 * Get the color for a character status based on the provided status.
 *
 * @param status - A string representing the status, e.g. 'alive', 'dead','unknown'.
 * @returns A string representing the color ('success', 'error', or 'inherit').
 */
export const getStatusColor = (status: string) => {
  const { alive, dead } = STATUS;
  return status === alive ? 'success' : status === dead ? 'error' : 'inherit';
};
