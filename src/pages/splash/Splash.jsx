import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import SnsLogin from '../snsLogin/SnsLogin';
import * as S from './Splash.Style';

const SplashPage = () => {
  // const [showUp, setShowUp] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowUp(false);
  //   }, 1500);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // });

  // const navigate = useNavigate();

  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (token) {
  //     navigate('/home');
  //   }
  // }, []);

  // return showUp ? (
  //   <S.SplashPageWrapper>
  //     <S.LogoImg />
  //   </S.SplashPageWrapper>
  // ) : (
  //   // <SnsLogin />
  // );
  const [display, setDisplay] = useState('flex');
  setTimeout(() => {
    setDisplay('none');
  }, 1500);

  return (
    <S.SplashPageWrapper display={display}>
      <S.LogoImg />
    </S.SplashPageWrapper>
  );
};

export default SplashPage;
