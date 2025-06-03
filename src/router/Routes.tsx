import { cloneElement, lazy, Suspense } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import type { RouteType } from './RouterTypes';

const Dashboard = lazy(() => import('@/pages/Dashboard'));

const checkPermission = (p: string | string[], list: string[]) =>
  p instanceof Array ? p.every(p => list.includes(p)) : list.includes(p);

export function routesResolver(routes: RouteType[], ownPermissions: string[]): RouteObject[] {
  return routes.reduce<RouteObject[]>((acc, route) => {
    const { path, element, options, children, permissions } = route;

    const key = uuid();
    const hasPermission = permissions ? permissions.some(p => checkPermission(p, ownPermissions)) : true;

    if (!hasPermission) {
      return [
        ...acc,
        {
          path,
          element: <Navigate key={key} to="/" replace />,
          ...options,
        },
      ];
    }

    const routes = [
      ...acc,
      {
        id: path,
        path,
        element: element ? (
          <Suspense fallback={<p>Loading page...</p>}>
            {cloneElement(element as any, { key, path, permissions })}
          </Suspense>
        ) : undefined,
        children: children ? routesResolver(children, ownPermissions) : undefined,
        ...options,
      },
    ] as RouteObject[];

    return routes;
  }, []);
}

export function createRoutes() {
  const routes: RouteType[] = [
    {
      path: '/*',
      element: <h1>Not found</h1>,
    },
    {
      path: '/',
      element: <Navigate to="/dashboard" replace />,
    },
    {
      path: '/Dashboard',
      element: <Dashboard />,
    },
  ];

  return routes;
}
