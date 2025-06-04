import React from 'react';
import { Box, Text } from 'grommet';
import type { Repo } from '@/queries/reposList/types';

interface Props {
  repos: Repo[];
}

export const RepoListView: React.FC<Props> = ({ repos }) => (
  <Box gap="small" pad="medium">
    <Text weight="bold" size="large">
      Repositórios Públicos
    </Text>
    {repos.map(repo => (
      <Box key={repo.id} border={{ size: 'xsmall' }} pad="small" round="small">
        <Text weight="bold">{repo.name}</Text>
        <Text size="small">{repo.description || 'Sem descrição.'}</Text>
        <Text size="small">
          🌟 {repo.stargazers_count} | 🍴 {repo.forks_count} | 🧠 {repo.language}
        </Text>
      </Box>
    ))}
  </Box>
);
