import { PropsWithChildren, useEffect, useState } from 'react';

import { RouteConfig } from '@shared/types/Route.types';
import { useNavigate } from 'react-router-dom';

type Props = PropsWithChildren & {
  middlewares: RouteConfig['middleware'];
};

const Middleware = ({ middlewares, children }: Props) => {
  const [allowed, setAllowed] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const executeMiddleware = () => {
      if (!middlewares) return true;
      for (const middleware of middlewares) {
        if (!middleware({ navigate })) return false;
      }
      return true;
    };
    setAllowed(executeMiddleware());
  }, [navigate, middlewares, setAllowed]);

  if (!allowed) return null;

  return <>{children}</>;
};

export default Middleware;
