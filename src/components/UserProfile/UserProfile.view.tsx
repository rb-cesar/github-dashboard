import React from 'react';
import { Box, Avatar, Text } from 'grommet';
import type { User } from '../../providers/UserProvider/UserTypes';

interface Props {
  user: User;
}

export const UserProfileView: React.FC<Props> = ({ user }) => (
  <Box direction="row" gap="medium" align="center" pad="medium">
    <Avatar src={user.avatar_url} size="large" />
    <Box>
      <Text weight="bold" size="large">
        {user.name} (@{user.login})
      </Text>
      <Text>{user.bio}</Text>
      <Text size="small">📍 {user.location}</Text>
      <Text size="small">🏢 {user.company}</Text>
      <Text size="small">📦 Repositórios: {user.public_repos}</Text>
      <Text size="small">👥 Seguidores: {user.followers}</Text>
      <Text size="small">🔗 Seguindo: {user.following}</Text>
      <Text size="small">🕒 Conta criada em: {new Date(user.created_at).toLocaleDateString()}</Text>
    </Box>
  </Box>
);
