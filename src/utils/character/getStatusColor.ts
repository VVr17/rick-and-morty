import { statuses } from 'constants/filter/filterSelectValues';

/**
 * Get the color for a character status based on the provided status.
 *
 * @param status - A string representing the status, e.g. 'alive', 'dead','unknown'.
 * @returns A string representing the color ('success', 'error', or 'inherit').
 */
export const getStatusColor = (status: string) => {
  return status === statuses[0]
    ? 'success'
    : status === statuses[1]
    ? 'error'
    : 'inherit';
};
