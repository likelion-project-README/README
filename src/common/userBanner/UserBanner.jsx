import React from 'react';
import Button from '../button/Button';
import * as S from './UserBanner.Style';

/*
UserBanner 사용 명세

UserBanner(state)
state - active, disabled
*/

const UserBanner = ({ state }) => {
  return (
    <S.UserBannerWrapper>
      <S.UserImg />
      <S.UserInfo>
        <S.UserNickName>애월읍 위니브 감귤농장</S.UserNickName>
        <S.UserId>@ weniv_Mandarin</S.UserId>
      </S.UserInfo>
      {state === 'btn-disabled' ? null : (
        <Button state='active' size='xs' tit='팔로우' />
      )}
    </S.UserBannerWrapper>
  );
};

export default UserBanner;
