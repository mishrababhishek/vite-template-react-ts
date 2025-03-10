import { featureRoute } from '@features/Feature.Route';
import { RouteConfig } from '@shared/types/Route.types';
import { RouteObject, useRoutes } from 'react-router-dom';

import Middleware from './Middleware';
import RouteWrapper from './RouteWrapper';

const createRoute = (param: RouteConfig): RouteObject => ({
  path: param.path,
  element: (
    <Middleware middlewares={param.middleware}>
      <RouteWrapper Component={param.component} />
    </Middleware>
  ),
  children: param.children?.map((route) => createRoute(route)),
});

const Router = () => {
  const routes = useRoutes(featureRoute.map((routes) => createRoute(routes)));
  return routes;
};

export default Router;
