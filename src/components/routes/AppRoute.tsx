import { IAppRoute } from './types/approute';

function AppRoute({ component: Component, ...props }: IAppRoute) {
  return <Component {...props} />;
}

export default AppRoute;
