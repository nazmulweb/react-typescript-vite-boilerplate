import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import AppRoute from '../components/routes/AppRoute';
import PrivateRoute from '../components/routes/PrivateRoute';
import { appRoutes, publicRoutes } from '../configs/routes';
import type { IAppRouteConfig } from '../configs/routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PrivateRoute />}>
      {appRoutes.map((route: IAppRouteConfig) => {
        return (
          <Route
            key={route.key}
            path={route.path}
            element={<AppRoute component={route.component} />}
          />
        );
      })}
      {publicRoutes.map((route: IAppRouteConfig) => {
        return (
          <Route
            key={route.key}
            path={route.path}
            element={<AppRoute component={route.component} />}
          />
        );
      })}
    </Route>
  )
);

export default router;
