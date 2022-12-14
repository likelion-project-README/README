import React from 'react';
import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import * as S from './EmailLogin.Style';

const EmailLoginPage = () => {
  return (
    <S.LoginSec>
      <S.LoginTit>로그인</S.LoginTit>
      <S.EmailLoginForm>
        <InputBox label='이메일' id='이메일' />
        <S.Password>
          <S.PasswordLab htmlFor='passwordInput'>비밀번호</S.PasswordLab>
          <S.PasswordInp id='passwordInput' type='password' />
        </S.Password>
      </S.EmailLoginForm>
      <Button tit='로그인' state='active' size='lg' txtcolor='#fff'></Button>
      <S.SignUpTxt type='button'>이메일로 회원가입</S.SignUpTxt>
    </S.LoginSec>
  );
};

export default EmailLoginPage;
