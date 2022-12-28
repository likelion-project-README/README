import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import InputBox from '../../common/inputBox/InputBox';
import loadProfileAPI from '../../api/loadProfileAPI';
import accountnameValidAPI from '../../api/accountnameValidAPI';
import uploadImgAPI from '../../api/uploadImgAPI';
import editProfileAPI from '../../api/editProfileAPI';
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

  // 기존 프로필 정보 불러오기
  useEffect(() => {
    const getProfile = async () => {
      const result = await loadProfileAPI(accountName);
      setUserName(result.profile.username);
      setUserId(result.profile.accountname);
      setUserIntro(result.profile.intro);
      if (result.profile.image) {
        setUserImg(result.profile.image);
      }
    };
    getProfile();
  }, []);

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
      setBtnActive(true);
    }
  };

  // onChange : 계정ID 유효성 검사
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

  // onBlur : 계정ID 중복 검사
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
      alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else {
      setUserIntro(IntroVal);
      setBtnActive(true);
    }
  };

  // 프로필 수정 데이터 전송
  const editProfile = async (e) => {
    e.preventDefault();
    if (btnActive === true) {
      await editProfileAPI(userName, userId, userIntro, userImg);
      alert('프로필 수정이 완료되었습니다.'); // eslint-disable-line no-alert
      navigate(`/profile/${accountName}`);
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
          onChange={handleUserIdValid}
          onBlur={handleUserIdDuplicate}
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
