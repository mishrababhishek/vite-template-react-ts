import { NavigateFunction } from 'react-router-dom';

type MiddlewareFunctionParams = {
  navigate: NavigateFunction;
};
type MiddlewareFunctionReturnProps = boolean;

export type MiddlewareFunction = (
  params: MiddlewareFunctionParams
) => MiddlewareFunctionReturnProps;
