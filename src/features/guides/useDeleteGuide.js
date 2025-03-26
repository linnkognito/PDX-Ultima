import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { deleteGuide as deleteGuideApi } from '../../services/apiGuides';

export function useDeleteGuide() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteGuide } = useMutation({
    mutationFn: deleteGuideApi,
    onSuccess: () => {
      toast.success('Guide successfully deleted 🗑️');
      queryClient.invalidateQueries({
        queryKey: ['guides'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteGuide };
}
