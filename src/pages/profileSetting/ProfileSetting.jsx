import React from 'react';
import InputBox from '../../common/inputBox/InputBox';
import Button from '../../common/button/Button';
import * as S from './ProfileSetting.Style';

const ProfileSetting = () => {
  return (
    <S.ProfileSettingWrap>
      <S.ProfileSettingTit>프로필 설정 페이지</S.ProfileSettingTit>
      <S.Title>프로필 설정</S.Title>
      <S.Description>나중에 언제든지 변경할 수 있습니다.</S.Description>
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
      <S.BtnWrap>
        <Button size='lg' tit='README 시작하기' isActive={false} />
      </S.BtnWrap>
    </S.ProfileSettingWrap>
  );
};

export default ProfileSetting;
