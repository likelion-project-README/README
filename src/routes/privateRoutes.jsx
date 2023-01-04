import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ authorization }) => {
  console.log('여기는 PrivateRoutes');
  console.log(authorization);
  return authorization ? <Navigate to='/' /> : <Outlet />;
};

export default PrivateRoutes;
