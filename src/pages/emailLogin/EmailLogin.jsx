import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './EmailLogin.Style';

import EmailLoginAPI from '../../api/emailLoginAPI';
import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';

const EmailLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const [btnActive, setBtnActive] = useState('');
  // const [loginValue, setLoginValue] = useState({
  //   email: '',
  //   password: '',
  // });

  // 버튼 활성화
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

  // validation
  const handleSubmit = (event) => {
    event.preventDefault();
    EmailLoginAPI({
      user: {
        email,
        password,
      },
    })
      .then((data) => {
        const emaiReg =
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!emaiReg.test(email)) {
          setEmailError('올바른 이메일 형식이 아닙니다.');
        } else if (data.statue === 422) {
          setPasswordError(data.message);
        } else {
          localStorage.setItem('token', data.user.token);
          const userData = data.user;
          console.log(data);
          navigate('/home');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.LoginSec>
      <S.LoginTit>로그인</S.LoginTit>
      <S.EmailLoginForm onSubmit={handleSubmit}>
        <InputBox
          label='이메일'
          id='email'
          type='email'
          // required
          // value={email}
          setInput={setEmail}
          placeholder='이메일 주소를 입력해주세요'
          message={emailError}
        />
        <InputBox
          label='비밀번호'
          id='password'
          type='password'
          // required
          // value={password}
          setInput={setPassword}
          minLength='6'
          placeholder='비밀번호를 입력해주세요'
        />
      </S.EmailLoginForm>
      <Button
        type='submit'
        size='lg'
        tit='로그인'
        onClick={handleClick}
        isActive={btnActive}
        disabled={password.length < 6 ? 'disabled' : null}
        message={
          password.length < 6 ? '비밀번호는 6자리 이상이어야 합니다' : null
        }
      />
      <S.SignUpTxt type='button'>
        <Link to='/signUp'>이메일로 회원가입</Link>
      </S.SignUpTxt>
    </S.LoginSec>
  );
};

export default EmailLoginPage;
