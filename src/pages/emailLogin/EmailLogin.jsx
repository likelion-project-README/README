import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './EmailLogin.Style';
import {
  accountnameData,
  isLogin,
  profileImageData,
} from '../../atoms/LoginData';

import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import { emailLoginAPI } from '../../api/mandarinAPI';

const EmailLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [btnActive, setBtnActive] = useState(true);
  const [isEmailRed, setIsEmailRed] = useState(false);
  const [isPasswordRed, setIsPasswordRed] = useState(false);
  const setAccountNameData = useSetRecoilState(accountnameData);
  const setProfileImageData = useSetRecoilState(profileImageData);
  const setIsLoginState = useSetRecoilState(isLogin);

  // 이메일 유효성 검사
  const emailValidator = (e) => {
    const emailCurrentValue = e.target.value;
    setEmail(e.target.value);
    const emailReg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailCurrentValue === '') {
      setEmailValid(false);
    } else if (!emailReg.test(emailCurrentValue)) {
      setIsEmailRed(true);
      setEmailValid(false);
      setEmailError('* 올바른 이메일 형식이 아닙니다');
    } else {
      setIsEmailRed(false);
      setEmailValid(true);
      setEmailError('');
    }
  };

  // 비밀번호 유효성 검사
  const handlePasswordValid = (e) => {
    const passwordCurrentValue = e.target.value;
    setPassword(e.target.value);
    if (passwordCurrentValue.length < 6) {
      setPasswordValid(false);
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
      setIsPasswordRed(true);
    } else if (passwordCurrentValue.length >= 6) {
      setPasswordValid(true);
      setPasswordError('');
      setIsPasswordRed(false);
    }
  };

  // 로그인 버튼 활성화
  useEffect(() => {
    if (emailValid && passwordValid) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [emailValid, passwordValid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (btnActive === true) {
      const data = await emailLoginAPI(email, password);

      if (data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
        setIsPasswordRed(true);
        setPasswordError('이메일 또는 비밀번호가 일치하지 않습니다.');
      } else {
        localStorage.setItem('token', data.user.token);
        setAccountNameData(data.user.accountname);
        setProfileImageData(data.user.image);
        setIsLoginState(true);
        navigate('/home', {
          state: {
            email,
            password,
          },
        });
      }
    }
  };

  return (
    <section className='wrapper-contents max-width min-width'>
      <S.LoginTit>로그인</S.LoginTit>
      <S.LoginForm onSubmit={handleSubmit}>
        <InputBox
          label='이메일'
          placeholder='이메일 주소를 입력해주세요'
          id='email'
          type='email'
          required
          onChange={emailValidator}
          value={email}
          bottomColor={isEmailRed ? 'red' : null}
          display={isEmailRed ? 'yes' : null}
          message={emailError}
        />
        <InputBox
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          id='password'
          type='password'
          required
          onChange={handlePasswordValid}
          value={password}
          bottomColor={isPasswordRed ? 'red' : 'yes'}
          display={isPasswordRed ? 'yes' : null}
          message={passwordError}
        />
        <S.ButtonWrap>
          <Button
            type='submit'
            size='lg'
            tit='로그인'
            isActive={btnActive}
            disabled={emailValid && passwordValid ? null : 'disabled'}
            message={passwordError}
          />
        </S.ButtonWrap>
        <S.StyledLink to='/join'>이메일로 회원가입</S.StyledLink>
      </S.LoginForm>
    </section>
  );
};

export default EmailLogin;
