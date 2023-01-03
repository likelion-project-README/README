import { Link } from 'react-router-dom';
import React from 'react';
import * as S from './SnsLogin.Style';

const SnsLogin = () => {
  return (
    <S.SnsLoginSec>
      <S.LogoImg />
      {/* SNS로그인 버튼 */}
      <S.SnsLoginWrapper>
        <S.KakaoBtn className='min-width'>
          <S.KakaoImg />
          카카오톡 계정으로 로그인
        </S.KakaoBtn>
        <S.GoogleBtn className='min-width'>
          <S.GoogleImg />
          구글 계정으로 로그인
        </S.GoogleBtn>
        <S.FacebookBtn className='min-width'>
          <S.FacebookImg />
          페이스북 계정으로 로그인
        </S.FacebookBtn>
        {/* 이메일로그인 회원가입 링크 */}
        <S.LoginLink>
          <S.EmailLink to='/login/emailLogin'>이메일로 로그인</S.EmailLink>
          <S.SignUpLink to='/signUp'>회원가입</S.SignUpLink>
        </S.LoginLink>
      </S.SnsLoginWrapper>
    </S.SnsLoginSec>
  );
};

export default SnsLogin;
