import { RouteConfig } from '@shared/types/Route.types';
import { Outlet } from 'react-router-dom';

export const featureRoute: RouteConfig[] = [
  {
    path: '/',
    component: Outlet,
  },
];
