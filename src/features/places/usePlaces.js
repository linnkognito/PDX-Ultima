import { useQuery } from '@tanstack/react-query';
import { getPlaces } from '../../services/apiPlaces';

export function usePlaces() {
  const {
    isLoading,
    data: places,
    error,
  } = useQuery({ queryKey: ['places'], queryFn: getPlaces });

  return { isLoading, error, places };
}
