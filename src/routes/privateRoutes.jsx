import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ authorization }) => {
  return authorization ? <Navigate to='/' /> : <Outlet />;
};

export default PrivateRoutes;
