import React from 'react';
import { Box } from 'grommet';
import { SearchUser } from '../../components/SearchUser/SearchUser.controller';
import { UserProfile } from '../../components/UserProfile/UserProfile.controller';

interface Props {
  username: string | null;
  onSearch: (username: string) => void;
}

export const DashboardView: React.FC<Props> = ({ username, onSearch }) => (
  <Box pad="medium" gap="large">
    <SearchUser onSearch={onSearch} />
    {username && <UserProfile username={username} />}
  </Box>
);
