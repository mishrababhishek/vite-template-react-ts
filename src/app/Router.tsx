import { RouteObject, useRoutes } from 'react-router-dom';
import { RouteConfig } from '../shared/types/Route.types';
import { featureRoute } from '../features/Feature.Route';
import RouteWrapper from './RouteWrapper';
import Middleware from './Middleware';

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
