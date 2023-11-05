import { filterFields } from 'constants/filter/filterFields';
import { IFilterFields } from 'types/filterForm';

interface ISearchParams {
  searchParams: URLSearchParams;
  searchType: 'pagination' | 'filter';
  dataToUpdate?: IFilterFields;
  page?: number;
}

export const updateSearchParams = ({
  searchParams,
  searchType,
  dataToUpdate,
  page,
}: ISearchParams) => {
  const currentSearchParams = new URLSearchParams(
    Array.from(searchParams.entries())
  );

  if (searchType === 'pagination' && page) {
    updateStringParam(currentSearchParams, 'page', page.toString()); // Update page
  } else {
    currentSearchParams.delete('page'); // Drop page when filter has been changed
  }

  if (searchType === 'filter' && dataToUpdate) {
    filterFields.forEach(fieldName => {
      updateStringParam(
        currentSearchParams,
        fieldName,
        dataToUpdate[fieldName]
      );
    });

    updateArrayParam(currentSearchParams, 'property', dataToUpdate.property);
  }

  return getURLQuery(currentSearchParams);
};

export const updateStringParam = (
  searchParams: URLSearchParams,
  paramName: string,
  value: string
) => {
  searchParams.delete(paramName);

  if (value) {
    searchParams.append(paramName, value);
  }
};

export const updateArrayParam = (
  searchParams: URLSearchParams,
  paramName: string,
  values: string[]
) => {
  searchParams.delete(paramName);

  if (values.length) {
    searchParams.delete(paramName);

    values.forEach(value => {
      searchParams.append(paramName, value);
    });
  }
};

/**
 * Create and return new URL query string according to the given search params
 */
export const getURLQuery = (currentSearchParams: URLSearchParams) => {
  const search = currentSearchParams.toString();
  return search ? `?${search}` : '';
};
