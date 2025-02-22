import React from 'react';
import { MiddlewareFunction } from './Middleware.types';

export type RouteConfig = {
  path: string;
  component: React.ComponentType | React.LazyExoticComponent<React.ComponentType>;
  middleware?: Array<MiddlewareFunction>;
  children?: Array<RouteConfig>;
};
