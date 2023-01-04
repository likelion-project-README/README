import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutesRev = ({ authorization }) => {
  return authorization ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutesRev;
