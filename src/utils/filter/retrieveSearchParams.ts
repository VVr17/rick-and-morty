import { filterDefaultValues, filterFields } from 'constants/filter';
import { FIRST_PAGE } from 'constants/listConstants';
import { ISearchQuery, PropertyType } from 'types';

/**
 * Retrieve search parameters from a URLSearchParams object and return an search query object.
 *
 * @param searchParams - A URLSearchParams object containing query parameters from the URL.
 * @returns - Object representing the search query parameters for filter form.
 */
export const retrieveSearchParams = (
  searchParams: URLSearchParams
): ISearchQuery => {
  const searchQuery: ISearchQuery = {
    page: +(searchParams?.get('page') || FIRST_PAGE),
    ...filterDefaultValues,
    property: searchParams.getAll('property') as PropertyType[],
  };

  filterFields.forEach(key => {
    searchQuery[key] = searchParams.get(key) || '';
  });

  return searchQuery;
};
