import React from 'react';
import { RepoListView } from './RepoList.view';
import { useRepoListQuery } from '@/queries/reposList/hooks/useRepoListQuery';

interface Props {
  username: string;
}

export const RepoList: React.FC<Props> = ({ username }) => {
  const { repos, isPending, isError } = useRepoListQuery(username);

  if (isPending) return <div>Carregando repositórios...</div>;
  if (isError || !repos) return <div>Erro ao carregar repositórios.</div>;

  return <RepoListView repos={repos} />;
};
