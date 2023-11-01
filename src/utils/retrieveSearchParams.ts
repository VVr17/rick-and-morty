import { FIRST_PAGE } from 'constants/listConstants';
import { URLSearchParams } from 'url';

interface SearchQuery {
  page: number;
  name: string;
  status: string;
}

export const retrieveSearchParams = (
  searchParams: URLSearchParams
): SearchQuery => {
  const searchQuery: SearchQuery = {
    page: +(searchParams?.get('page') || FIRST_PAGE),
    name: searchParams.get('name') || '',
    status: searchParams.get('status') || '',
  };

  return searchQuery;
};
