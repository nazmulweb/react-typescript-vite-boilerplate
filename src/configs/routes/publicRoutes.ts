import React from 'react';
import { IAppRouteConfig } from './type/approute';

export const publicRoute: IAppRouteConfig[] = [
  {
    key: 'appsProject.dashboard',
    path: `/home`,
    component: React.lazy(() => import('../../view/Home')),
    authority: ['ADMIN', 'USER'],
  },
];
