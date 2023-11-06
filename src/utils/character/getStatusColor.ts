import { statuses } from 'constants/filter/filterSelectValues';

export const getStatusColor = (status: string) => {
  return status === statuses[0]
    ? 'success'
    : status === statuses[1]
    ? 'error'
    : 'inherit';
};
