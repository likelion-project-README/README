import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './EmailLogin.Style';

import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import loginAPI from '../../api/emailLoginAPI';

// const loginData = {
//   user: {
//     email: emailRef.current.value,
//     password: passwordRef.current.value,
//   },
// };

const EmailLoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const [btnActive, setBtnActive] = useState(true);
  const navigate = useNavigate();

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const loginData = {
    user: {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    },
  };

  const handleClick = () => {
    navigate('/signUp/profileSetting', {
      state: {
        email,
        password,
      },
    });
  };

  // 이메일 유효성 검사
  const emailInputCheck = ({ target }) => {
    const emailInputValue = target.value;
    const checkEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailInputCheck === '') {
      setEmailError('입력해주세요.');
      setEmailValid(false);
    } else if (!checkEmail.test(emailInputValue)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);
      // localStorage.setItem('token', data.user.token);
      // const userData = data.user;
      // console.log(data);
      // navigate('/home');
    }
  };
  // 비밀번호 유효성 검사
  const passwordInputCheck = ({ target }) => {
    const passwordInputValue = target.value;
    if (passwordInputCheck === '') {
      setPasswordError('입력해주세요.');
      setPasswordValid(false);
    } else if (!passwordInputValue.length < 6) {
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
      setPasswordValid(false);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  };

  const goProfileSetting = () => {
    return emailValid && passwordValid
      ? setBtnActive(false)
      : setBtnActive(true);
  };
  // 버튼 활성화
  useEffect(() => {
    // emailValid && passwordValid ? setBtnActive(false) : setBtnActive(true);
    if (email && password) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [email, password]);

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
      <S.EmailLoginForm onSubmit={loginAPI}>
        <InputBox
          label='이메일'
          placeholder='이메일 주소를 입력해주세요'
          id='email'
          type='email'
          // required
          // value={email}
          buttonColor='red'
          display='yes'
          message={emailError}
          setInput={setEmail}
          onKeyUp={goProfileSetting}
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
          display='yes'
        />
      </S.EmailLoginForm>
      <Button
        type='submit'
        size='lg'
        tit='로그인'
        onClick={handleClick}
        isActive={btnActive}
        disabled={password.length < 6 ? 'disabled' : null}
        message={passwordError}
      />
      <S.SignUpTxt type='button'>
        <Link to='/signUp'>이메일로 회원가입</Link>
      </S.SignUpTxt>
    </S.LoginSec>
  );
};

export default EmailLoginPage;
