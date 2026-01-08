import { useQuery } from '@tanstack/react-query';

import { axiosApi } from '@/api/axiosInstans';

import type { User } from '@/types/info';

export const useUserInfoList = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosApi.get<User[]>(`/users`);
      return res.data;
    },
  });
