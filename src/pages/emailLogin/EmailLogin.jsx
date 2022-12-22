import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './EmailLogin.Style';

import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import loginAPI from '../../api/emailLoginAPI';

const EmailLoginPage = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const [btnActive, setBtnActive] = useState(true);

  // 데이터 불러오기
  // useEffect(() => {
  //   const getLoginData = async () => {
  //     const result = await loginAPI('')
  //   }
  // })

  const loginData = {
    user: {
      email: setEmail.value,
      password: setPassword.value,
    },
  };

  // 로그인 클릭시 profileSetting page로 넘어간다
  const handleClick = () => {
    navigate('/signUp/profileSetting', {
      state: { loginData },
    });
  };

  // 이메일 유효성 검사
  const handleEmailValid = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (reg === '') {
      setEmailError('입력해주세요.');
      setEmailValid(false);
    } else if (!reg.test(emailValue)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);

      //   localStorage.setItem('token', json.user.token);
      //   const  = loginData.user;
      //   console.log(data);
      //   navigate('/home');
    }
  };
  // 비밀번호 유효성 검사
  const handlePasswordValid = (e) => {
    const passwordInputValue = e.target.value;
    setPassword(passwordInputValue);
    if (passwordInputValue === '') {
      setPasswordError('입력해주세요.');
      setPasswordValid(false);
    } else if (passwordInputValue.length < 6) {
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
      setPasswordValid(false);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  };

  // 로그인 버튼 활성화
  const handleButtonActive = () => {
    return emailValid && passwordValid
      ? setBtnActive(false)
      : setBtnActive(true);
  };

  // 로그인 버튼 활성화 useEffect활용
  // useEffect(() => {
  //   // emailValid && passwordValid ? setBtnActive(false) : setBtnActive(true);
  //   if (email && password) {
  //     setBtnActive(true);
  //   } else {
  //     setBtnActive(false);
  //   }
  // }, [email, password]);

  // getEmailLoginAPI api폴더 내의 내용
  // const getEmailLoginAPI = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await fetch('https://mandarin.api.weniv.co.kr/user/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(loginData),
  //     });
  //     const json = await res.json();
  //     console.log(json);
  //     // const token = data.user('token');
  //     // localStorage.setItem('token', token);
  //     // return data;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  //   return null;
  // };

  return (
    <S.LoginSec>
      <S.LoginTit>로그인</S.LoginTit>
      <form onSubmit={loginAPI}>
        {emailValid ? (
          <InputBox
            label='이메일'
            placeholder='이메일 주소를 입력해주세요'
            id='email'
            type='email'
            onChange={handleEmailValid}
            onBlur={handleButtonActive}
            value={email}
          />
        ) : (
          <InputBox
            label='이메일'
            placeholder='이메일 주소를 입력해주세요'
            id='email'
            type='email'
            onChange={handleEmailValid}
            onBlur={handleButtonActive}
            value={email}
            buttonColor='red'
            display='yes'
            message={emailError}
          />
        )}
        {passwordValid ? (
          <InputBox
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요'
            id='password'
            type='password'
            minLength='6'
            onChange={handlePasswordValid}
            onBlur={handleButtonActive}
            value={password}
          />
        ) : (
          <InputBox
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요'
            id='password'
            type='password'
            minLength='6'
            buttonColor='red'
            display='yes'
            message={passwordError}
            onChange={handlePasswordValid}
            onBlur={handleButtonActive}
            value={password}
          />
        )}
      </form>
      <Button
        type='submit'
        size='lg'
        tit='로그인'
        onClick={handleClick}
        isActive={btnActive}
        // disabled={password.length < 6 ? 'disabled' : null}
        message={passwordError}
      />
      <S.SignUpTxt type='button' onClick={handleClick}>
        <Link to='/signUp'>이메일로 회원가입</Link>
      </S.SignUpTxt>
    </S.LoginSec>
  );
};

export default EmailLoginPage;
