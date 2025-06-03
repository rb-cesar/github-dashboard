import React from 'react';
import { Box, TextInput, Button } from 'grommet';

interface Props {
  username?: string;
  onUsernameChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchUserView: React.FC<Props> = ({ username, onUsernameChange, onSearch }) => (
  <Box direction="row" gap="small" pad="medium">
    <TextInput
      placeholder="Digite o nome de usuário do GitHub"
      value={username}
      onChange={event => onUsernameChange(event.target.value)}
    />
    <Button label="Pesquisar" onClick={onSearch} primary />
  </Box>
);
