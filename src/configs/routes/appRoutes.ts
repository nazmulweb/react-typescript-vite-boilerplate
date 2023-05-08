import React from 'react';
import { IAppRouteConfig } from './type/approute';

const appsRoute: IAppRouteConfig[] = [
  {
    key: 'appsProject.dashboard',
    path: `/home`,
    component: React.lazy(() => import('../../view/Home')),
    authority: ['ADMIN', 'USER'],
  },
  {
    key: 'appsProject.dashboard',
    path: `/about`,
    component: React.lazy(() => import('../../view/about/About')),
    authority: ['ADMIN', 'USER'],
  },
];

export default appsRoute;
