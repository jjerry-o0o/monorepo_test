import { useQuery } from '@tanstack/react-query';

import { axiosApi } from '@/api/axiosInstans';

import type { Category } from '@/types/info';

export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axiosApi.get<Category[]>(`/categories`);
      return res.data;
    },
  });
