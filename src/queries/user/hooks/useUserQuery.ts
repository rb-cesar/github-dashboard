import { useQuery } from '@tanstack/react-query';
import { getUser } from '../queries';
import type { User } from '../types';

export function useUserQuery(username: string, minutes = 5) {
  const userResponse = useQuery<User>({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
    enabled: !!username,
    staleTime: minutes * 60 * 1000,
  });

  const user = userResponse.data;
  const { isLoading, isPending, isPaused, isError, error, refetch } = userResponse || {};

  return { user, isLoading, isPending, isPaused, isError, error, refetch };
}
