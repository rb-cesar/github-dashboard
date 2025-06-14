import React from 'react';
import { UserProfileView } from './UserProfile.view';
import { useUserQuery } from '@/queries/user/hooks/useUserQuery';

interface Props {
  username: string;
}

export const UserProfile: React.FC<Props> = ({ username }) => {
  const { user, isPending, isError } = useUserQuery(username);

  if (isPending) return <div>Carregando...</div>;
  if (isError || !user) return <div>Erro ao carregar o perfil.</div>;

  return <UserProfileView user={user} />;
};
