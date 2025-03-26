import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditGuide } from '../../services/apiGuides';

export function useCreateGuide() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createGuide } = useMutation({
    mutationFn: createEditGuide, // no need to pass args
    onSuccess: () => {
      toast.success('New guide created, pow pow!');
      queryClient.invalidateQueries({ queryKey: ['guides'] });
    },
    onError: (err) => {
      toast.error(`Creating new guide failed (${err.message})`);
    },
  });

  return { isCreating, createGuide };
}
