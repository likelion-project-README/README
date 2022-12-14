import React from 'react';
import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import * as S from './Join.Style';

const JoinPage = () => {
  return (
    <S.JoinSec>
      <S.JoinTit>이메일로 회원가입</S.JoinTit>
      <S.JoinForm>
        <InputBox label='이메일' id='이메일' />
        <S.Password>
          <S.PasswordLab htmlFor='passwordInput'>비밀번호</S.PasswordLab>
          <S.PasswordInp id='passwordInput' type='password' />
        </S.Password>
      </S.JoinForm>
      <Button tit='다음' state='active' size='lg' txtcolor='#fff'></Button>
    </S.JoinSec>
  );
};

export default JoinPage;
