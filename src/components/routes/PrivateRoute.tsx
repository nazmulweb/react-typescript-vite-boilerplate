import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const isAuth = true;
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
