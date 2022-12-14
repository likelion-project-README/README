import React from 'react';
import Button from '../button/Button';
import * as S from './UserBanner.Style';

/*
UserBanner 사용 명세

UserBanner(state)
state - active, disabled
*/

const UserBanner = ({ state }) => {
  if (state === 'btn-disabled') {
    return (
      <S.UserBannerWrapper>
        <S.UserImg />
        <S.UserInfo>
          <S.UserNickName>애월읍 위니브 감귤농장</S.UserNickName>
          <S.UserId>@ weniv_Mandarin</S.UserId>
        </S.UserInfo>
      </S.UserBannerWrapper>
    );
  }
  if (state === 'btn-active') {
    return (
      <S.UserBannerWrapper>
        <S.UserImg />
        <S.UserInfo>
          <S.UserNickName>애월읍 위니브 감귤농장</S.UserNickName>
          <S.UserId>@ weniv_Mandarin</S.UserId>
        </S.UserInfo>
        <Button state='active' size='xs' tit='팔로우' />
      </S.UserBannerWrapper>
    );
  }
  return <S.UserBannerWrapper>state를 전달하세요.</S.UserBannerWrapper>;
};

export default UserBanner;
