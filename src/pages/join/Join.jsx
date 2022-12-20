import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import * as S from './Join.Style';

const JoinPage = () => {
  const [btnActive, setBtnActive] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (email && password) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [email, password]);

  const handleClick = () => {
    navigate('/signUp/profileSetting', {
      state: {
        email,
        password,
      },
    });
  };
  return (
    <S.JoinSec>
      <S.JoinTit>이메일로 회원가입</S.JoinTit>
      <S.JoinForm>
        <InputBox
          label='이메일'
          id='이메일'
          type='email'
          required
          value={email}
          setInput={setEmail}
          // onChange={handleData}
          placeholder='이메일 주소를 입력해주세요'
        />
        <InputBox
          label='비밀번호'
          id='비밀번호'
          type='password'
          required
          value={password}
          setInput={setPassword}
          // onChange={handleData}
          placeholder='비밀번호를 입력해주세요'
        />
      </S.JoinForm>
      <Button
        type='submit'
        size='lg'
        tit='다음'
        onClick={handleClick}
        isActive={btnActive}
        // isActive={email.length !== 0 && password.length !== 0 ? true : 'false'}
      ></Button>
    </S.JoinSec>
  );
};

export default JoinPage;
