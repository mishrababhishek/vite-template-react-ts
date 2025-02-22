import { Outlet } from 'react-router-dom';
import { RouteConfig } from '../shared/types/Route.types';

export const featureRoute: RouteConfig[] = [
  {
    path: '/',
    component: Outlet,
  },
];
