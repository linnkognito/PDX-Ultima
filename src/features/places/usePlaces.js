import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPlaces } from '../../services/apiPlaces';

export function usePlaces() {
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get('favorite');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'favorite', value: filterValue, method: 'eq' };

  // Sort
  const sortByParams = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortByParams.split('-');
  const sortBy = { field, direction };

  const {
    isLoading,
    data: places,
    error,
  } = useQuery({
    queryKey: ['places', filter, sortBy],
    queryFn: () => getPlaces({ filter, sortBy }),
  });

  return { isLoading, error, places };
}
