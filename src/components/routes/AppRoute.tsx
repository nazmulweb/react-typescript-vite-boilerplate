import { IAppRoute } from './types/approute';

function AppRoute({ component: Component }: IAppRoute) {
  return <Component />;
}

export default AppRoute;
