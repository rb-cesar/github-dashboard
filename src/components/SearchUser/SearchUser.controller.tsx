import React, { useState } from 'react';
import { SearchUserView } from './SearchUser.view';

interface Props {
  onSearch: (username: string) => void;
}

export const SearchUser: React.FC<Props> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return <SearchUserView onUsernameChange={setUsername} onSearch={handleSearch} />;
};
