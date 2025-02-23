import { Suspense } from 'react';

import { RouteConfig } from '@shared/types/Route.types';

type Props = {
  Component: RouteConfig['component'];
};

const isLazyComponent = (component: RouteConfig['component']): boolean =>
  (component as any).$$typeof === Symbol.for('react.lazy');

const RouteWrapper = ({ Component }: Props) => {
  if (isLazyComponent(Component)) {
    return <Suspense fallback={<div>Loading...</div>}>{<Component />}</Suspense>;
  }
  return <Component />;
};

export default RouteWrapper;
