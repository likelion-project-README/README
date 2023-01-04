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
  // 이런건 콘솔찍어보면서하면 편햐
  // console.log(token); // 토큰 콘솔찍어서 로그인할 때 토큰이 들어와있는지부터 먼저 확인해  navigate 되기전에 토큰이 들어와있어야하잖아!
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
