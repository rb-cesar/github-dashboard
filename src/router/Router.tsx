import { useMemo, type FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoutes, routesResolver } from './Routes';

export const RenderRoutes: FC = () => {
  const routes = useMemo(() => {
    return routesResolver(createRoutes(), []);
  }, []);

  return <RouterProvider router={createBrowserRouter(routes)} />;
};
