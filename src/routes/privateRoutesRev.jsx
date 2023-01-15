import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutesRev = ({ authorization }) => {
  return authorization ? <Navigate to='/' /> : <Outlet />;
};

export default PrivateRoutesRev;
