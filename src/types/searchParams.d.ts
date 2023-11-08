import { IFilterFields } from './filterForm';

interface ISearchParams {
  searchParams: URLSearchParams;
  searchType: 'pagination' | 'filter';
  dataToUpdate?: IFilterFields;
  page?: number;
}
