import { api } from '../../services/api';
import type { Repo } from './types';

export function getUserRepos(username: string) {
  return api.get<Repo[]>(`/users/${username}/repos`).then(res => res.data);
}
