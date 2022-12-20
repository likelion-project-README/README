import React from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import InputBox from '../../common/inputBox/InputBox';
import * as S from './ProfileEdit.Style';

const ProfileEdit = () => {
  const tokenstr =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTAyMmFmMTdhZTY2NjU4MWM5ZWQ3ZCIsImV4cCI6MTY3NjYyMzMxMywiaWF0IjoxNjcxNDM5MzEzfQ.OX9sGjYFvVza6NkceeVbNsnudli_KopZeAhEkgbtTBM';

  localStorage.setItem('token', tokenstr);
  const token = localStorage.getItem('token');

  return (
    <S.ProfileEditWrap>
      <S.ProfileEditTit>프로필 수정 페이지</S.ProfileEditTit>
      {/* 업로드 -> 저장으로 텍스트 바꿔야함 */}
      <TopBanner type='top-upload-nav' />
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
        />
        <InputBox
          label='계정 ID'
          id='userID'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
        />
        <InputBox
          label='소개'
          id='userIntro'
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
        />
      </form>
    </S.ProfileEditWrap>
  );
};

export default ProfileEdit;
