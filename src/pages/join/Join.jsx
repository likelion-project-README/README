import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Join.Style';

import joinAPI from '../../api/joinAPI';
import accountnameValidAPI from '../../api/accountnameValidAPI';
import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';

const JoinPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
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
  useEffect(() => {
    const handleEmailValid = () => {
      const reg =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (email.length === 0) {
        setEmailError('입력해주세요.');
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

  // 비밀번호 검증
  useEffect(() => {
    const handlePasswordValid = () => {
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

  // 회원가입 버튼 활성화
  useEffect(() => {
    if (emailValid && passwordValid) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    joinAPI(username, email, password, accountname, intro, image)
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
      <S.JoinForm onSubmit={handleSubmit}>
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
          onChange={handleData}
          value={password}
          display={passwordValid ? null : 'yes'}
          buttonColor={passwordValid ? null : 'red'}
          message={passwordError}
        />
        <S.div>
          <Button
            type='submit'
            size='lg'
            tit='다음'
            onClick={handleClick}
            isActive={btnActive}
            disabled={emailValid && passwordValid ? null : 'disabled'}
            message={passwordError}
          >
            <Link to='/signUp/profileSetting'></Link>
          </Button>
        </S.div>
      </S.JoinForm>
    </S.JoinSec>
  );
};

export default JoinPage;
