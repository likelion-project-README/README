import { Link } from 'react-router-dom';
import React from 'react';
import * as S from './SnsLogin.Style';

const SnsLogin = () => {
  return (
    <S.SnsLoginSec className='min-width'>
      <S.LogoImg />
      <S.SnsLoginWrapper className='min-width'>
        <S.KakaoBtn>
          <S.KakaoImg />
          카카오톡 계정으로 로그인
        </S.KakaoBtn>
        <S.GoogleBtn>
          <S.GoogleImg />
          구글 계정으로 로그인
        </S.GoogleBtn>
        <S.FacebookBtn>
          <S.FacebookImg />
          페이스북 계정으로 로그인
        </S.FacebookBtn>
        <S.LoginLink>
          <S.EmailLink to='/emailLogin'>이메일로 로그인</S.EmailLink>
          <S.SignUpLink to='/join'>회원가입</S.SignUpLink>
        </S.LoginLink>
      </S.SnsLoginWrapper>
    </S.SnsLoginSec>
  );
};

export default SnsLogin;
