import { FIRST_PAGE } from 'constants/listConstants';
import { URLSearchParams } from 'url';

interface SearchQuery {
  page: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  species: string;
}

export const retrieveSearchParams = (
  searchParams: URLSearchParams
): SearchQuery => {
  const searchQuery: SearchQuery = {
    page: +(searchParams?.get('page') || FIRST_PAGE),
    name: searchParams.get('name') || '',
    status: searchParams.get('status') || '',
    type: searchParams.get('type') || '',
    gender: searchParams.get('gender') || '',
    species: searchParams.get('species') || '',
  };

  return searchQuery;
};
