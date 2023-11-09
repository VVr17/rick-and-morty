import { filterFields } from 'constants/filter';

/**
 * Update search parameters based on the provided search type, data to update and page number.
 *
 * @param searchParams - An instance of URLSearchParams containing the current search parameters.
 * @param searchType - A string indicating the type of search ('pagination' or 'filter').
 * @param dataToUpdate - An object containing data from filter to update in the search parameters .
 * @param page - The page number to update in the search parameters.
 *
 * @returns A string representing the updated URL query based on the input parameters.
 */
export const updateSearchParams = ({
  searchParams,
  searchType,
  dataToUpdate,
  page,
}: ISearchParams) => {
  // Create an array from the current search parameters.
  const currentSearchParams = new URLSearchParams(
    Array.from(searchParams.entries())
  );

  // Update or remove the 'page' parameter based on the search type.
  if (searchType === 'pagination' && page) {
    updateStringParam(currentSearchParams, 'page', page.toString()); // Update page
  } else {
    currentSearchParams.delete('page'); // Drop the page param if filter params have been changed
  }

  // Update filter-related parameters based on the data to update from the filter form submit.
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

  // Generate and return the updated URL query as a string.
  return getURLQuery(currentSearchParams);
};

/**
 * Update a string parameter in a URLSearchParams object.
 *
 * @param searchParams - An instance of URLSearchParams to update.
 * @param paramName - The name of the parameter to update.
 * @param value - The new value for the parameter.
 */
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

/**
 * Update an array parameter in a URLSearchParams object.
 * Remove parament or append the new parameter values if the array of new values is not empty.
 *
 * @param searchParams - An instance of URLSearchParams to update.
 * @param paramName - The name of the parameter to update.
 * @param values - An array of new values for the parameter.
 */
export const updateArrayParam = (
  searchParams: URLSearchParams,
  paramName: string,
  values: string[]
) => {
  searchParams.delete(paramName);

  if (values.length) {
    values.forEach(value => {
      searchParams.append(paramName, value);
    });
  }
};

/**
 * Create and return new URL query string according to the given search params
 */
export const getURLQuery = (currentSearchParams: URLSearchParams): string => {
  const search = currentSearchParams.toString();
  return search ? `?${search}` : '';
};
