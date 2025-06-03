import React, { useState } from 'react';
import { DashboardView } from './Dashboard.view';

export const Dashboard: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  return <DashboardView username={username} onSearch={setUsername} />;
};
