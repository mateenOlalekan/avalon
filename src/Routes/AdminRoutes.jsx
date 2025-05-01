import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated, isAdmin } from '../utils/auth';

const AdminRoutes = () => {
  if (!isAuthenticated()) return <Navigate to="/login" />;
  if (!isAdmin()) return <Navigate to="/" />;
  return <Outlet />;
};

export default AdminRoutes;
