import React, { useState, useEffect } from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import InputBox from '../../common/inputBox/InputBox';
import * as S from './ProfileEdit.Style';

const ProfileEdit = () => {
  const [btnActive, setBtnActive] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [userIntro, setUserIntro] = useState('');
  useEffect(() => {
    if (username && userId && userIntro) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [username, userId, userIntro]);
  return (
    <S.ProfileEditWrap>
      <S.ProfileEditTit>프로필 수정 페이지</S.ProfileEditTit>
      {/* 업로드 -> 저장으로 텍스트 바꿔야함 */}
      <TopBanner type='top-upload-nav' tit='저장' isActive={btnActive} />
      <form>
        <S.ImgWrap>
          <S.UserImg />
          <S.ImgUploadBtn />
          <S.ImgUploadLab htmlFor='userImg' />
          <S.ImgUploadInp type='file' id='userImg' />
        </S.ImgWrap>
        <InputBox
          label='사용자 이름'
          id='userName'
          placeholder='2~10자 이내여야 합니다.'
          min='2'
          max='10'
          setInput={setUsername}
        />
        <InputBox
          label='계정 ID'
          id='userID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          setInput={setUserId}
        />
        <InputBox
          label='소개'
          id='userIntro'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          setInput={setUserIntro}
        />
      </form>
    </S.ProfileEditWrap>
  );
};

export default ProfileEdit;
