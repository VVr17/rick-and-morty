interface ISearchParams {
  searchParams: URLSearchParams;
  searchType: 'pagination' | 'filter';
  dataToUpdate?: IFilterFields;
  page?: number;
}
