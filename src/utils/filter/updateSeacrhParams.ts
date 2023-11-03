import { IFormFields } from 'types/filterForm';

export const updateSearchParams = (
  searchParams: URLSearchParams,
  dataToUpdate: IFormFields
) => {
  const currentSearchParams = new URLSearchParams(
    Array.from(searchParams.entries())
  );

  // TODO: add drop to first page after filter has been changed
  // TODO: add pagination query

  const { name, status } = dataToUpdate;
  updateStringParam(currentSearchParams, 'name', name);
  updateStringParam(currentSearchParams, 'status', status);

  return getURLQuery(currentSearchParams);
};

export const updateStringParam = (
  searchParams: URLSearchParams,
  paramName: string,
  value: string
) => {
  if (!value) {
    searchParams.delete(paramName);
  } else {
    searchParams.delete(paramName);
    searchParams.append(paramName, value);
  }
};

export const updateArrayParam = (
  searchParams: URLSearchParams,
  paramName: string,
  values: string[]
) => {
  if (!values.length) {
    searchParams.delete(paramName);
  } else {
    searchParams.delete(paramName);
    values.forEach(value => {
      searchParams.append(paramName, value);
    });
  }
};

export const getURLQuery = (currentSearchParams: URLSearchParams) => {
  const search = currentSearchParams.toString(); // Cast to string
  return search ? `?${search}` : ''; // Create and return new query
};
