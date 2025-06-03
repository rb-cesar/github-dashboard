import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RenderRoutes } from './router/Router';
import { Grommet } from 'grommet';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grommet>
        <RenderRoutes />
      </Grommet>
    </QueryClientProvider>
  );
}

export default App;
