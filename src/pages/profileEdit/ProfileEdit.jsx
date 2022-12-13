import React from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import * as S from './ProfileEdit.Style';

const ProfileEdit = () => {
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
        <S.InputBox>
          <S.InputBoxTit htmlFor='userName'>사용자 이름</S.InputBoxTit>
          <S.InputBoxInp
            placeholder='2~10자 이내여야 합니다.'
            id='userName'
            minLength='2'
            maxLength='10'
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputBoxTit htmlFor='userID'>계정 ID</S.InputBoxTit>
          <S.InputBoxInp
            placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
            id='userID'
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputBoxTit htmlFor='userIntro'>소개</S.InputBoxTit>
          <S.InputBoxInp
            placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
            id='userIntro'
          />
        </S.InputBox>
      </form>
    </S.ProfileEditWrap>
  );
};

export default ProfileEdit;
