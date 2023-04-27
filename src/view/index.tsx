import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import { appsRoute } from '../configs/routes/appRoutes';
import AppRoute from '../components/routes/AppRoute';
import PrivateRoute from '../components/routes/PrivateRoute';
import { IAppRouteConfig } from '../configs/routes/type/approute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PrivateRoute />}>
      {appsRoute.map((route: IAppRouteConfig) => {
        return (
          <Route
            key={route.key}
            path={route.path}
            element={<AppRoute component={route.component} />}
          />
        );
      })}
      {/* <Route index element={<App />} /> */}
    </Route>
  )
);

export default router;
