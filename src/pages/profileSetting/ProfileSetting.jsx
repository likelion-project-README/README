import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './ProfileSetting.Style';
import { accountnameData, profileImageData } from '../../atoms/LoginData';
import {
  emailLoginAPI,
  joinAPI,
  uploadImgAPI,
  accountnameValidAPI,
} from '../../api/mandarinAPI';

import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import logoProfile from '../../assets/logo-profile.svg';

const ProfileSetting = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const location = useLocation();
  const userEmail = location.state.email;
  const userPassword = location.state.password;

  const [validId, setValidId] = useState(false);
  const [userIdMsg, setUserIdMsg] = useState('');
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState(logoProfile);
  const [btnActive, setBtnActive] = useState('');
  const [isIdRed, setIsIdRed] = useState(false);

  const setAccountNameData = useSetRecoilState(accountnameData);
  const setProfileImageData = useSetRecoilState(profileImageData);

  // 이미지 업로드
  const uploadImg = async (e) => {
    const imgFile = e.target.files[0];
    const imgUrl = await uploadImgAPI(imgFile);
    setImage(imgUrl);
  };

  // 사용자 이름 공백으로 시작 방지
  const handleUserName = (e) => {
    const NameVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(NameVal)) {
      e.preventDefault();
      // alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else {
      setUsername(NameVal);
    }
  };

  // onInput : 계정ID 유효성 검사
  const handleUserIdValid = (e) => {
    const testUserId = e.target.value;
    const regex = /^[_A-Za-z0-9.]*$/;
    if (regex.test(testUserId)) {
      setAccountname(testUserId);
      setIsIdRed(false);
    } else {
      setIsIdRed(true);
      setUserIdMsg('*영문, 숫자, 밑줄, 마침표만 입력할 수 있습니다.');
    }
  };

  // onChange : 계정ID 중복 검사
  const handleUserIdDuplicate = async (e) => {
    const testUserId = e.target.value;
    setAccountname(testUserId);
    const validMsg = await accountnameValidAPI(testUserId);
    if (validMsg.message === '이미 가입된 계정ID 입니다.') {
      setIsIdRed(true);
      setValidId(false);
      setUserIdMsg('*이미 사용 중인 ID입니다.');
    } else {
      setIsIdRed(false);
      setValidId(true);
    }
  };

  // 소개 공백으로 시작 방지
  const handleUserIntro = (e) => {
    const IntroVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(IntroVal)) {
      e.preventDefault();
      // alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else {
      setIntro(IntroVal);
      setBtnActive(true);
    }
  };

  // 버튼 활성화
  useEffect(() => {
    if (username.length > 0 && validId) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [username, validId]);

  const settingProfile = async (e) => {
    e.preventDefault();
    if (btnActive) {
      try {
        await joinAPI(
          username,
          userEmail,
          userPassword,
          accountname,
          intro,
          image,
        );
        const loginedUserData = await emailLoginAPI(userEmail, userPassword);
        const userToken = loginedUserData.user.token;
        localStorage.setItem('token', userToken.toString());
        setAccountNameData(loginedUserData.user.accountname);
        setProfileImageData(loginedUserData.user.image);

        navigate('/home', { replace: true });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className='max-width min-width wrapper-contents'>
      <S.ProfileSettingTit>프로필 설정 페이지</S.ProfileSettingTit>
      <S.Title>프로필 설정</S.Title>
      <S.Description>나중에 언제든지 변경할 수 있습니다.</S.Description>
      <form onSubmit={settingProfile}>
        <S.ImgWrap>
          <S.UserImg src={image} alt='유저 프로필 이미지' />
          <S.ImgUploadLab htmlFor='userImg' />
          <S.ImgUploadInp
            type='file'
            id='userImg'
            accept='image/*'
            ref={fileInputRef}
            onChange={uploadImg}
          />
        </S.ImgWrap>
        <InputBox
          label='사용자 이름'
          id='userName'
          placeholder='2~10자 이내여야 합니다.'
          min='2'
          max='10'
          value={username}
          onChange={handleUserName}
        />
        <InputBox
          label='계정 ID'
          id='userID'
          type='userID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          value={accountname}
          onInput={handleUserIdValid}
          onChange={handleUserIdDuplicate}
          bottomColor={isIdRed ? 'red' : null}
          display={isIdRed ? 'yes' : null}
          message={userIdMsg}
        />
        <InputBox
          label='소개'
          id='userIntro'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          value={intro}
          onChange={handleUserIntro}
        />
        <S.BtnWrap>
          <Button
            type='submit'
            size='lg'
            tit='README 시작하기'
            isActive={btnActive}
          />
        </S.BtnWrap>
      </form>
    </section>
  );
};

export default ProfileSetting;
