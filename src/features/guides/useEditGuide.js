import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditGuide } from '../../services/apiGuides';

export function useEditGuide() {
  const queryClient = useQueryClient();

  const { isLoading: isEditingGuide, mutate: editGuide } = useMutation({
    mutationFn: ({ newGuide, id }) => createEditGuide(newGuide, id),
    onSuccess: () => {
      toast.success('Guide successfully updated!');
      queryClient.invalidateQueries({ queryKey: ['guides'] });
    },
    onError: (err) => {
      toast.error(`Editing guide failed (${err.message})`);
    },
  });

  return { isEditingGuide, editGuide };
}
