import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, ValidationMode } from 'react-hook-form';

import { filterDefaultValues } from 'constants/filter';
import { filterSchema } from 'utils/validation';
import { IFilterFields } from 'types';

export const formConfig = {
  resolver: yupResolver(filterSchema) as Resolver<IFilterFields>,
  mode: 'all' as keyof ValidationMode,
  defaultValues: filterDefaultValues,
};
