import { IFilterFields } from './filterForm';

interface ISearchQuery extends IFilterFields {
  page: number;
  [key: string]: string | number | string[];
}
