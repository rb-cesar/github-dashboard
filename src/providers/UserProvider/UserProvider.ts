import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';
import type { User } from './UserTypes';

export const UserProvider = {
  async getUser(username: string) {
    return api.get(`/users/${username}`).then((res: any) => res.data);
  },

  useUserQuery(username: string, minutes = 5) {
    const userResponse = useQuery<User>({
      queryKey: ['user', username],
      queryFn: () => this.getUser(username),
      enabled: !!username,
      staleTime: minutes * 60 * 1000,
    });

    const user = userResponse.data;
    const { isLoading, isPending, isPaused, isError, error, refetch } = userResponse || {};

    return { user, isLoading, isPending, isPaused, isError, error, refetch };
  },
};
