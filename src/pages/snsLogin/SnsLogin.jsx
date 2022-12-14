import React from 'react';
import * as S from './SnsLogin.Style';

const SnsLogin = () => {
  return (
    <S.SnsLoginSec>
      <S.LogoImg />
      {/* SNS로그인 버튼 */}
      <S.SnsLoginWrapper>
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
        {/* 이메일로그인 회원가입 링크 */}
        <S.LoginLink>
          <S.Email>이메일로 로그인</S.Email>
          <S.SignUp>회원가입</S.SignUp>
        </S.LoginLink>
      </S.SnsLoginWrapper>
    </S.SnsLoginSec>
  );
};

export default SnsLogin;
