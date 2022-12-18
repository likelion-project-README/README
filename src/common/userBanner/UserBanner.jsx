import React from 'react';
import Button from '../button/Button';
import * as S from './UserBanner.Style';

/*
UserBanner 사용 명세

UserBanner(btntxt)
btntxt - btn-cancel, btn-follow, btn-null
*/

const UserBanner = ({ btntxt }) => {
  return (
    <S.UserBannerWrapper>
      <S.UserImg />
      <S.UserInfo>
        <S.UserNickName>애월읍 위니브 감귤농장</S.UserNickName>
        <S.UserId>@ weniv_Mandarin</S.UserId>
      </S.UserInfo>
      {/* {btntxt === 'btn-cancel' ? (
        <Btn state='disabled' size='xs' tit='취소' />
      ) : btntxt === 'btn-follow' ? (
        <Btn state='active' size='xs' tit='팔로우' />
      ) : null} */}
      {btntxt === 'btn-cancel' && (
        <Button state='disabled' size='xs' tit='취소' />
      )}
      {btntxt === 'btn-follow' && (
        <Button state='active' size='xs' tit='팔로우' />
      )}
      {btntxt === 'btn-null' && null}
    </S.UserBannerWrapper>
  );
};

export default UserBanner;
