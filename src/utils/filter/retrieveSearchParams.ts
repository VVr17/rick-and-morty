import { filterDefaultValues } from 'constants/filter/filterDefaultValues';
import { filterFields } from 'constants/filter/filterFields';
import { FIRST_PAGE } from 'constants/listConstants';
import { ISearchQuery } from 'types/searchQuery';
import { PropertyType } from 'types/filterFields';

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
