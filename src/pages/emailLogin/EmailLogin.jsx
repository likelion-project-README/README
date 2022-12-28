/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './EmailLogin.Style';
import {
  accountnameData,
  emailData,
  introData,
  passwordData,
  profileImageData,
  usernameData,
} from '../../atoms/LoginData';

import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import loginAPI from '../../api/emailLoginAPI';

const EmailLoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [btnActive, setBtnActive] = useState(true);
  const setUsernameData = useSetRecoilState(usernameData);
  const setEmailData = useSetRecoilState(emailData);
  const setPasswordData = useSetRecoilState(passwordData);
  const setAccountNameData = useSetRecoilState(accountnameData);
  const setIntroData = useSetRecoilState(introData);
  const setProfileImageData = useSetRecoilState(profileImageData);

  const handleData = (e) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
  };

  // 이메일 유효성 검사
  useEffect(() => {
    const handleEmailValid = () => {
      const reg =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (email.length === 0) {
        // setEmailError('입력해주세요.');
        setEmailValid(false);
      } else if (!reg.test(email)) {
        setEmailError('올바른 이메일 형식이 아닙니다.');
        setEmailValid(false);
      } else {
        setEmailError('');
        setEmailValid(true);
      }
    };
    handleEmailValid();
  }, [email]);

  // 비밀번호 유효성 검사
  const handlePasswordValid = () => {
    if (password.length < 6) {
      setPasswordValid(false);
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
    } else if (password.length >= 6) {
      setPasswordValid(true);
      setPasswordError('');
    }
  };

  // 로그인 버튼 활성화
  useEffect(() => {
    if (emailValid && passwordValid) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (btnActive === true) {
      const data = await loginAPI(email, password);
      localStorage.setItem('token', data.user.token);
      setUsernameData(data.user.username);
      setEmailData(data.user.email);
      setPasswordData(data.user.password);
      setAccountNameData(data.user.accountname);
      setIntroData(data.user.intro);
      setProfileImageData(data.user.image);
      // loginAPI(email, password).then((data) => {
      //   localStorage.setItem('token', data.user.token);
      //   setUsernameData(data.user.username);
      //   setEmailData(data.user.email);
      //   setPasswordData(data.user.password);
      //   setAccountNameData(data.user.accountname);
      //   setIntroData(data.user.intro);
      //   setProfileImageData(data.user.image);
      // });
      navigate('/', {
        state: {
          email,
          password,
        },
      });
    }
  };

  return (
    <S.LoginSec>
      <S.LoginTit>로그인</S.LoginTit>
      <S.LoginForm onSubmit={handleSubmit}>
        <InputBox
          label='이메일'
          placeholder='이메일 주소를 입력해주세요'
          id='email'
          type='email'
          required
          onChange={handleData}
          value={email}
          buttonColor={emailValid ? null : 'red'}
          display={emailValid ? null : 'yes'}
          message={emailError}
        />
        <InputBox
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          id='password'
          type='password'
          required
          onChange={handleData}
          onBlur={handlePasswordValid}
          value={password}
          display={passwordValid ? null : 'yes'}
          buttonColor={passwordValid ? null : 'red'}
          message={passwordError}
        />
        <S.div>
          <Button
            type='submit'
            size='lg'
            tit='로그인'
            isActive={btnActive}
            disabled={emailValid && passwordValid ? null : 'disabled'}
            message={passwordError}
          />
        </S.div>
      </S.LoginForm>
      <S.StyledLink to='/signUp'>이메일로 회원가입</S.StyledLink>
    </S.LoginSec>
  );
};

export default EmailLoginPage;
