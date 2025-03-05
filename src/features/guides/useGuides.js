import { useQuery } from '@tanstack/react-query';
import { getGuides } from '../../services/apiGuides';

export function useGuides() {
  const {
    isLoading,
    data: guides,
    error,
  } = useQuery({ queryKey: ['guides'], queryFn: getGuides });

  return { isLoading, error, guides };
}
