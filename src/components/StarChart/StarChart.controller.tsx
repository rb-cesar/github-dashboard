import React from 'react';
import { StarChartView } from './StarChart.view';
import { useRepoListQuery } from '@/queries/reposList/hooks/useRepoListQuery';

interface Props {
  username: string;
}

export const StarChart: React.FC<Props> = ({ username }) => {
  const { repos, isPending, isError } = useRepoListQuery(username);

  if (isPending) return <div>Carregando gráfico...</div>;
  if (isError || !repos) return <div>Erro ao carregar gráfico.</div>;

  const chartData = repos
    .filter(repo => repo.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .map(repo => ({
      name: repo.name,
      stars: repo.stargazers_count,
    }));

  return <StarChartView data={chartData} />;
};
