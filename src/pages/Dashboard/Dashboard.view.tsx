import React from 'react';
import { Box } from 'grommet';

// components
import RepoList from '@/components/RepotList';
import SearchUser from '@/components/SearchUser';
import UserProfile from '@/components/UserProfile';
import StarChart from '@/components/StarChart';

interface Props {
  username: string | null;
  onSearch: (username: string) => void;
}

export const DashboardView: React.FC<Props> = ({ username, onSearch }) => (
  <Box pad="medium" gap="large">
    <SearchUser onSearch={onSearch} />
    {username && (
      <>
        <UserProfile username={username} />
        <StarChart username={username} />
        <RepoList username={username} />
      </>
    )}
  </Box>
);
