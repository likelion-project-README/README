import React from 'react';
import Button from '../button/Button';
import * as S from './UserBanner.Style';

/*
UserBanner 사용 명세

UserBanner(btntxt)
btntxt - btn-cancel, btn-follow, btn-null
*/

const UserBanner = ({ btntxt, data }) => {
  return (
    <S.UserBannerWrapper>
      <S.UserImg src={data.image} />
      <S.UserInfo>
        <S.UserNickName>{data.username}</S.UserNickName>
        <S.UserId>@ {data.accountname}</S.UserId>
      </S.UserInfo>
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
