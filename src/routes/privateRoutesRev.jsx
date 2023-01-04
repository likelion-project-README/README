import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutesRev = ({ authorization }) => {
  console.log('여기는 PrivateRoutesReverse');
  console.log(authorization);
  return authorization ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutesRev;
