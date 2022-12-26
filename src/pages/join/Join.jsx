import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import {
  usernameData,
  emailData,
  passwordData,
  accountnameData,
  introData,
  profileImageData,
} from '../../atoms/LoginData';
import * as S from './Join.Style';

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
  const [passwordError, setPasswordError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
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

  // 이메일 검증(이메일 주소의 형식이 유효하지 않거나 이미 가입된 이메일일 경우)
  useEffect(() => {
    const handleEmailValid = (res) => {
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

  // } else if (res.test !== null) {
  //   setEmailError('이미 가입된 이메일 주소 입니다.');
  //   setEmailValid(false);
  // }
  // console.log(email, password);
  // console.log(emailValid, passwordValid);

  // const handleEmailDuplicate = async (e) => {
  //   e.preventDefault();
  //   await emailDuplicateAPI(email).then(res => {
  //     if(res.data === email) {

  //     }
  //   })
  //     await AuthActions.handleEmailDuplicate(email);
  //     if (this.props.exists.get('email')) {
  //       this.setError('이미 가입된 이메일 주소 입니다.');
  //     } else {
  //       this.setError(null);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   await emailDuplicateAPI(email);
  //   if (test.message === emailDuplicateAPI(email)) {
  //     setEmailError('이미 가입된 이메일 주소 입니다.');
  //     setEmailValid(false);
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
    joinAPI(email, password, accountname, username, intro, image)
      .then((data) => {
        localStorage.setItem('token', data.user.token);
        setUsernameData(data.user.username);
        setEmailData(data.user.email);
        setPasswordData(data.user.password);
        setAccountNameData(data.user.accountname);
        setIntroData(data.user.intro);
        setProfileImageData(data.user.profileImageData);
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
