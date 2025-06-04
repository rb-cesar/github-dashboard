import { api } from '../../services/api';
import type { User } from './types';

export function getUser(username: string) {
  return api.get<User>(`/users/${username}`).then((res: any) => res.data);
}
