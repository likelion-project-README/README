import React, { useState } from 'react';
import * as S from './Splash.Style';

const SplashPage = () => {
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
