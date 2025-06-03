import type { JSX } from 'react';
import { type RouteObject } from 'react-router-dom';

export type RouteType = {
  path: string;
  element?: JSX.Element;
  options?: Omit<RouteObject, 'path' | 'element' | 'children'>;
  permissions?: string[] | (string | string[])[];
  children?: RouteType[];
};

export type RouterPageProps = {
  path?: string;
  permissions?: string[];
};
