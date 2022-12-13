import React from 'react';
import * as S from './UserBanner.Style';

const UserBanner = () => {
  return (
    <S.UserBannerWrapper>
      <S.UserImg />
      <S.UserInfo>
        <S.UserNickName>애월읍 위니브 감귤농장</S.UserNickName>
        <S.UserId>@ weniv_Mandarin</S.UserId>
      </S.UserInfo>
      <S.FollowBtn>팔로우</S.FollowBtn>
    </S.UserBannerWrapper>
  );
};

export default UserBanner;
