import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './Join.Style';
import {
  usernameData,
  emailData,
  passwordData,
  accountnameData,
  introData,
  profileImageData,
} from '../../atoms/LoginData';

import joinAPI from '../../api/joinAPI';
import Button from '../../common/button/Button';
import InputBox from '../../common/inputBox/InputBox';
import emailDuplicateAPI from '../../api/emailDuplicateAPI';

const JoinPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emaiDuplicate, setEmailDuplicate] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [btnActive, setBtnActive] = useState('');

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

  // onChange : 유저이메일 유효성 검사
  const handleEmailValid = (e) => {
    const testUserEmail = e.target.value;
    setEmail(testUserEmail);
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regex.test(testUserEmail)) {
      setEmail(testUserEmail);
      setEmailValid(true);
    } else {
      setEmailValid(false);
      setEmailError('올바른 이메일 형식이 아닙니다.');
    }
  };

  // onBlur : 유저이메일 중복 검사
  const handleEmailDuplicate = async (e) => {
    const testUserEmail = e.target.value;
    setEmail(testUserEmail);
    const validMsg = await emailDuplicateAPI(testUserEmail);
    if (validMsg.message === '이미 가입된 이메일 주소 입니다.') {
      setEmailValid(false);
      setEmailError('*이미 가입된 이메일 주소입니다.');
      setEmailDuplicate(false);
    } else if (validMsg.message === '사용 가능한 이메일 입니다.') {
      setEmailDuplicate(true);
    }
  };

  // 비밀번호 유효성 검사
  const handlePasswordValid = (e) => {
    const testPassword = e.target.type;
    if (password.length < 6) {
      setPasswordValid(false);
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
    } else if (password.length >= 6) {
      setPasswordValid(true);
      setPassword(testPassword);
      setPasswordError('');
    }
  };

  // 회원가입 버튼 활성화
  useEffect(() => {
    if (emailValid && passwordValid && emaiDuplicate) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [emailValid, passwordValid]);
  console.log(emailValid, passwordValid);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (btnActive === true) {
      joinAPI(email, password, accountname, username, intro, image).then(
        (data) => {
          localStorage.setItem('token', data.user.token);
          setUsernameData(data.user.username);
          setEmailData(data.user.email);
          setPasswordData(data.user.password);
          setAccountNameData(data.user.accountname);
          setIntroData(data.user.intro);
          setProfileImageData(data.user.profileImageData);
        },
      );
      navigate('/signUp/profileSetting', {
        state: {
          email,
          password,
        },
      });
    }
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
          onChange={handleEmailValid}
          onBlur={handleEmailDuplicate}
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
            tit='다음'
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
