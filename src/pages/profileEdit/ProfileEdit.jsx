import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import TopBanner from '../../common/topBanner/TopBanner';
import InputBox from '../../common/inputBox/InputBox';
import {
  loadProfileAPI,
  uploadImgAPI,
  editProfileAPI,
  accountnameValidAPI,
} from '../../api/mandarinAPI';
import logoProfile from '../../assets/logo-profile.svg';
import {
  usernameData,
  accountnameData,
  introData,
  profileImageData,
} from '../../atoms/LoginData';
import * as S from './ProfileEdit.Style';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const accountName = useParams().id;
  const fileInputRef = useRef();

  const [btnActive, setBtnActive] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [userImg, setUserImg] = useState('');
  const [validId, setValidId] = useState(true);
  const [userIdMsg, setUserIdMsg] = useState('');

  const setEditedProfileImg = useSetRecoilState(profileImageData);
  const setEditedAccoutName = useSetRecoilState(accountnameData);
  const setEditedUserName = useSetRecoilState(usernameData);
  const setEditedIntro = useSetRecoilState(introData);

  // 기존 프로필 정보 불러오기
  useEffect(() => {
    const getProfile = async () => {
      const result = await loadProfileAPI(accountName);
      setUserName(result.profile.username);
      setUserId(result.profile.accountname);
      setUserIntro(result.profile.intro);
      if (result.profile.image === 'http://146.56.183.55:5050/Ellipse.png') {
        setUserImg(logoProfile);
      } else {
        setUserImg(result.profile.image);
      }
    };
    getProfile();
  }, []);

  // 이미지 업로드
  const uploadImg = async (e) => {
    const imgFile = e.target.files[0];
    const imgUrl = URL.createObjectURL(imgFile);
    setUserImg(imgUrl);
    setBtnActive(true);
  };

  // 사용자 이름 공백으로 시작 방지
  const handleUserName = (e) => {
    const NameVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(NameVal)) {
      e.preventDefault();
      // alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else if (NameVal.length === 0) {
      setUserName(NameVal);
      setBtnActive(false);
    } else if (NameVal.length > 0) {
      setUserName(NameVal);
      setBtnActive(true);
    }
  };

  // onInput : 계정ID 유효성 검사
  const handleUserIdValid = (e) => {
    const testUserId = e.target.value;
    const regex = /^[_A-Za-z0-9.]*$/;
    if (regex.test(testUserId)) {
      setUserId(testUserId);
      setValidId(true);
      setBtnActive(true);
    } else {
      setValidId(false);
      setBtnActive(false);
      setUserIdMsg('*영문, 숫자, 밑줄, 마침표만 입력할 수 있습니다.');
    }
  };

  // onChange : 계정ID 중복 검사
  const handleUserIdDuplicate = async (e) => {
    const testUserId = e.target.value;
    setUserId(testUserId);
    const validMsg = await accountnameValidAPI(testUserId);
    if (validMsg.message === '이미 가입된 계정ID 입니다.') {
      setValidId(false);
      setUserIdMsg('*이미 사용 중인 ID입니다.');
    }
    // 유저 자신의 아이디는 중복 검사 제외
    if (testUserId === accountName) {
      setValidId(true);
      setBtnActive(true);
    }
  };

  // 소개 공백으로 시작 방지
  const handleUserIntro = (e) => {
    const IntroVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(IntroVal)) {
      e.preventDefault();
      // alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else if (IntroVal.length === 0) {
      setUserIntro(IntroVal);
      setBtnActive(false);
    } else if (IntroVal.length > 0) {
      setUserIntro(IntroVal);
      setBtnActive(true);
    }
  };

  // 기존 프로필에서 받아온 이미지 url을 file객체로 변환
  const urlToFileObject = async (imgUrl) => {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const file = new File([blob], 'image.jpg', { type: blob.type });
    return file;
  };

  // 프로필 수정 데이터 전송
  const editProfile = async (e) => {
    e.preventDefault();
    if (btnActive) {
      const convertedUserImg = await urlToFileObject(userImg);
      const uerImg = await uploadImgAPI(convertedUserImg);
      const updatedUserData = await editProfileAPI(
        userName,
        userId,
        userIntro,
        uerImg,
      );
      setEditedProfileImg(updatedUserData.image);
      setEditedAccoutName(updatedUserData.accountname);
      setEditedUserName(updatedUserData.username);
      setEditedIntro(updatedUserData.intro);
      // alert('프로필 수정이 완료되었습니다.'); // eslint-disable-line no-alert
      if (validId) {
        navigate(`/profile/${userId}`);
      }
    }
  };

  return (
    <S.ProfileEditWrap>
      <S.ProfileEditTit>프로필 수정 페이지</S.ProfileEditTit>
      <form onSubmit={editProfile}>
        <TopBanner type='top-upload-nav' tit='저장' isActive={btnActive} />
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
        <InputBox
          label='계정 ID'
          id='userID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          value={userId}
          onInput={handleUserIdValid}
          onChange={handleUserIdDuplicate}
          bottomColor={validId ? null : 'red'}
          message={userIdMsg}
          display={validId ? null : 'yes'}
        />
        <InputBox
          label='소개'
          id='userIntro'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          value={userIntro}
          onChange={handleUserIntro}
        />
      </form>
    </S.ProfileEditWrap>
  );
};

export default ProfileEdit;
