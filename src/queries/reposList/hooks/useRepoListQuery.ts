import { useQuery } from '@tanstack/react-query';
import { getUserRepos } from '../queries';

export function useRepoListQuery(username: string) {
  const {
    data: repos,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['repos', username],
    queryFn: () => getUserRepos(username),
    enabled: !!username,
  });

  return { repos, isPending, isError, refetch };
}
