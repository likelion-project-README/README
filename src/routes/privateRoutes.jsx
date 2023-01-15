import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ authorization }) => {
  return authorization ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
