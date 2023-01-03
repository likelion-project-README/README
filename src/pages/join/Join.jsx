import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';
import * as S from './Join.Style';
// import {
//   usernameData,
//   emailData,
//   passwordData,
//   accountnameData,
//   introData,
//   profileImageData,
// } from '../../atoms/LoginData';

import Button from '../../common/button/Button';
import InputBox from '../../common/inputBox/InputBox';
import { emailDuplicateAPI } from '../../api/mandarinAPI';

const JoinPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [emailDuplicate, setEmailDuplicate] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [btnActive, setBtnActive] = useState('');
  // const [username, setUsername] = useState('');
  // const [accountname, setAccountname] = useState('');
  // const [intro, setIntro] = useState('');
  // const [image, setImage] = useState('');

  // const setUsernameData = useSetRecoilState(usernameData);
  // const setEmailData = useSetRecoilState(emailData);
  // const setPasswordData = useSetRecoilState(passwordData);
  // const setAccountNameData = useSetRecoilState(accountnameData);
  // const setIntroData = useSetRecoilState(introData);
  // const setProfileImageData = useSetRecoilState(profileImageData);

  // const handleData = (e) => {
  //   if (e.target.type === 'email') {
  //     setEmail(e.target.value);
  //   } else if (e.target.type === 'password') {
  //     setPassword(e.target.value);
  //   }
  // };

  const emailValidator = (e) => {
    const emailCurrentValue = e.target.value;
    setEmail(e.target.value);
    const emailReg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailCurrentValue === '') {
      setEmailValid(false);
    } else if (!emailReg.test(emailCurrentValue)) {
      setEmailValid(false);
      setEmailError('* 올바른 이메일 형식이 아닙니다');
    } else {
      setEmailValid(true);
      setEmailError('');
    }
  };

  // 유저이메일 중복검사
  const handleEmailDuplicate = async (e) => {
    const testUserEmail = e.target.value;
    setEmail(testUserEmail);
    const validMsg = await emailDuplicateAPI(testUserEmail);
    if (validMsg.message === '이미 가입된 이메일 주소 입니다.') {
      setEmailValid(false);
      setEmailDuplicate(false);
      setEmailError('*이미 가입된 이메일 주소입니다.');
    } else if (validMsg.message === '사용 가능한 이메일 입니다.') {
      setEmailDuplicate(true);
    }
  };

  // 비밀번호 유효성 검사
  const handlePasswordValid = (e) => {
    const passwordCurrentValue = e.target.value;
    setPassword(e.target.value);
    if (passwordCurrentValue.length < 6) {
      setPasswordValid(false);
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
    } else if (passwordCurrentValue.length >= 6) {
      setPasswordValid(true);
      // setPassword(testPassword);
      setPasswordError('');
    }
  };
  // useEffect(() => {
  //   const handlePasswordValid = () => {
  //     // const testPassword = e.target.type;
  //     if (password.length < 6) {
  //       setPasswordValid(false);
  //       setPasswordError('비밀번호는 6자 이상이어야 합니다.');
  //     } else if (password.length >= 6) {
  //       setPasswordValid(true);
  //       // setPassword(testPassword);
  //       setPasswordError('');
  //     }
  //   };
  //   handlePasswordValid();
  // }, [password]);

  // 회원가입 버튼 활성화
  useEffect(() => {
    if (emailValid && password.length >= 6 && emailDuplicate) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [emailValid, passwordValid, emailDuplicate]);
  console.log(emailValid, passwordValid, emailDuplicate);
  console.log(email, password);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (btnActive === true) {
  //     const data = await joinAPI(
  //       email,
  //       password,
  //       accountname,
  //       username,
  //       intro,
  //       image,
  //     );
  //     localStorage.setItem('token', data.user.token);
  //     setUsernameData(data.user.username);
  //     setEmailData(data.user.email);
  //     setPasswordData(data.user.password);
  //     setAccountNameData(data.user.accountname);
  //     setIntroData(data.user.intro);
  //     setProfileImageData(data.user.profileImageData);
  //     // navigate('/signUp/profileSetting', {
  //     //   state: {
  //     //     email,
  //     //     password,
  //     //   },
  //     // });
  //   }
  // };

  const goToProfileSetting = () => {
    if (btnActive) {
      navigate('/signUp/profileSetting', {
        state: {
          email,
          password,
        },
      });
    }
  };

  return (
    <section className='wrapper-contents max-width min--width'>
      <S.JoinTit>이메일로 회원가입</S.JoinTit>
      <S.JoinForm>
        <InputBox
          label='이메일'
          placeholder='이메일 주소를 입력해주세요'
          id='email'
          type='email'
          required
          onChange={emailValidator}
          onBlur={handleEmailDuplicate}
          value={email}
          bottomColor={emailValid ? null : 'red'}
          display={emailValid ? null : 'yes'}
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
          display={passwordValid ? null : 'yes'}
          bottomColor={passwordValid ? null : 'red'}
          message={passwordError}
        />
        <S.ButtonWrap className='max-width min-width wrapper-contents'>
          <Button
            onClick={goToProfileSetting}
            size='lg'
            tit='다음'
            isActive={btnActive}
            disabled={emailValid && passwordValid ? null : 'disabled'}
            message={passwordError}
          />
        </S.ButtonWrap>
      </S.JoinForm>
    </section>
  );
};

export default JoinPage;
