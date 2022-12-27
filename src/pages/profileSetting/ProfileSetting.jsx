import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import uploadImgAPI from '../../api/uploadImgAPI';
import accountnameValidAPI from '../../api/accountnameValidAPI';
import joinAPI from '../../api/joinAPI';
import logoProfile from '../../assets/logo-profile.svg';
import * as S from './ProfileSetting.Style';

const ProfileSetting = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const [btnActive, setBtnActive] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [userImg, setUserImg] = useState(logoProfile);
  const [validId, setValidId] = useState(true);
  const [userIdMsg, setUserIdMsg] = useState('');

  // 이미지 업로드
  const uploadImg = async (e) => {
    const imgFile = e.target.files[0];
    const imgUrl = await uploadImgAPI(imgFile);
    setUserImg(imgUrl);
    setBtnActive(true);
  };

  // 사용자 이름 공백으로 시작 방지
  const handleUserName = (e) => {
    const NameVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(NameVal)) {
      e.preventDefault();
      alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else {
      setUserName(NameVal);
      // setBtnActive(true);
    }
  };

  // onChange : 계정ID 유효성 검사
  const handleUserIdValid = (e) => {
    const testUserId = e.target.value;
    const regex = /^[_A-Za-z0-9.]*$/;
    if (regex.test(testUserId)) {
      setUserId(testUserId);
      setValidId(true);
      // setBtnActive(true);
    } else {
      setValidId(false);
      setBtnActive(false);
      setUserIdMsg('*영문, 숫자, 밑줄, 마침표만 입력할 수 있습니다.');
    }
  };

  // onBlur : 계정ID 중복 검사
  const handleUserIdDuplicate = async (e) => {
    const testUserId = e.target.value;
    setUserId(testUserId);
    const validMsg = await accountnameValidAPI(testUserId);
    if (validMsg.message === '이미 가입된 계정ID 입니다.') {
      setValidId(false);
      setBtnActive(false);
      setUserIdMsg('*이미 사용 중인 ID입니다.');
    }
  };

  // 소개 공백으로 시작 방지
  const handleUserIntro = (e) => {
    const IntroVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(IntroVal)) {
      e.preventDefault();
      alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else {
      setUserIntro(IntroVal);
      // setBtnActive(true);
    }
  };

  // 버튼 활성화
  useEffect(() => {
    if (
      userName.length > 0 &&
      validId === true &&
      userIntro.length > 0 &&
      userImg !== logoProfile
    ) {
      setBtnActive(true);
    }
  }, [userName, validId, userIntro, userImg]);

  return (
    <S.ProfileSettingWrap>
      <S.ProfileSettingTit>프로필 설정 페이지</S.ProfileSettingTit>
      <S.Title>프로필 설정</S.Title>
      <S.Description>나중에 언제든지 변경할 수 있습니다.</S.Description>
      <form>
        <S.ImgWrap>
          <S.UserImg src={userImg} alt='유저 프로필 이미지' />
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
          value={userName}
          onChange={handleUserName}
        />
        {validId ? (
          <InputBox
            label='계정 ID'
            id='userID'
            placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
            value={userId}
            onChange={handleUserIdValid}
            onBlur={handleUserIdDuplicate}
          />
        ) : (
          <InputBox
            label='계정 ID'
            id='userID'
            placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
            value={userId}
            onChange={handleUserIdValid}
            onBlur={handleUserIdDuplicate}
            bottomColor='red'
            message={userIdMsg}
            display='yes'
          />
        )}
        <InputBox
          label='소개'
          id='userIntro'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          value={userIntro}
          onChange={handleUserIntro}
        />
      </form>
      <S.BtnWrap>
        <Button size='lg' tit='README 시작하기' isActive={btnActive} />
      </S.BtnWrap>
    </S.ProfileSettingWrap>
  );
};

export default ProfileSetting;
