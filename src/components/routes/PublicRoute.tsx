import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
  const isAuth = true;
  return isAuth ? <Navigate to="/auth" /> : <Outlet />;
}

export default PublicRoute;
