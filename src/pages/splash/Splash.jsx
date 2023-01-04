import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SnsLogin from '../snsLogin/SnsLogin';
import * as S from './Splash.Style';

const SplashPage = () => {
  const [showUp, setShowUp] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUp(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  });

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [token]);

  return showUp ? (
    <S.SplashPageWrapper className='wrapper-splash'>
      <S.LogoImg />
    </S.SplashPageWrapper>
  ) : (
    <SnsLogin />
  );
};

export default SplashPage;
