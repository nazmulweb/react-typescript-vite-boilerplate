import { FC, LazyExoticComponent, ReactNode } from 'react';

export interface IAppRoute {
  component: FC<any> | LazyExoticComponent<FC<any>>;
}
