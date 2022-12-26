import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Join.Style';
import joinAPI from '../../api/joinAPI';
import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import accountnameValidAPI from '../../api/accountnameValidAPI';

const JoinPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const [btnActive, setBtnActive] = useState('');
  // const [userId, setUserId] = useState('');
  // const [userIdValid, setUserIdValid] = useState(true);
  // const [userIdMsg, setUserIdMsg] = useState('');

  const handleData = (e) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
  };

  // 이메일 검증(이메일 주소의 형식이 유효하지 않거나 이미 가입된 이메일일 경우)
  const handleEmailValid = () => {
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!reg.test(email)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
      setEmailValid(false);
    } else if (email.length === 0) {
      setEmailError('입력해주세요.');
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);
    }
  };

  // 계정 검증
  // const handleUserIdDuplicate = async (e) => {
  //   const userId = e.target.value;
  //   setUserId(userId);
  //   const userIdValid = await accountnameValidAPI(userId);
  //   if (userIdValid.message === '이미 가입된 계정ID 입니다.') {
  //     setValidId(false);
  //     setUserIdMsg('*이미 사용 중인 ID입니다.');
  //   }
  // };

  useEffect(() => {
    const handlePasswordValid = () => {
      // const passwordInputValue = e.target.value;
      // setPassword(passwordInputValue);
      if (password.length < 6) {
        setPasswordValid(false);
        setPasswordError('비밀번호는 6자 이상이어야 합니다.');
      } else if (password.length >= 6) {
        setPasswordValid(true);
        setPasswordError('');
      }
    };
    handlePasswordValid();
  }, [password]);

  // console.log(email, password);
  // console.log(emailValid, passwordValid);
  // console.log(emailError, passwordError);
  // console.log(password.length);

  // 회원가입 버튼 활성화
  const handleButtonActive = () => {
    return emailValid && passwordValid
      ? setBtnActive(false)
      : setBtnActive(true);
  };

  // useEffect(() => {
  //   if (email && password) {
  //     setBtnActive(true);
  //   } else {
  //     setBtnActive(false);
  //   }
  // }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    joinAPI(email, password)
      .then((data) => {
        localStorage.setItem('token', data.user.token);
        localStorage.setItem('accountname', data.user.accountname);
        localStorage.setItem('profileImg', data.user.image);
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('password', data.user.password);
        localStorage.setItem('intro', data.user.intro);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleClick = () => {
  //   navigate('/signUp/profileSetting', {
  //     state: {
  //       email,
  //       password,
  //     },
  //   });
  // };

  return (
    <S.JoinSec>
      <S.JoinTit>이메일로 회원가입</S.JoinTit>
      <S.JoinForm onSubmit={handleSubmit}>
        <InputBox
          label='이메일'
          placeholder='이메일 주소를 입력해주세요'
          id='email'
          type='email'
          required
          onChange={handleEmailValid}
          onBlur={handleButtonActive}
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
          onChange={handleData}
          onBlur={handleButtonActive}
          value={password}
          display={passwordValid ? null : 'yes'}
          buttonColor={passwordValid ? null : 'red'}
          message={passwordError}
        />
      </S.JoinForm>
      <Button
        type='submit'
        size='lg'
        tit='다음'
        // onClick={handleClick}
        isActive={btnActive}
        disabled={emailValid && passwordValid ? null : 'disabled'}
        message={passwordError}
      >
        <Link to='/signUp/profileSetting'></Link>
      </Button>
    </S.JoinSec>
  );
};

export default JoinPage;
