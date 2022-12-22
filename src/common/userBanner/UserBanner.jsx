import React, { useState } from 'react';
import Button from '../button/Button';
import * as S from './UserBanner.Style';

/*
UserBanner 사용 명세

UserBanner(btntxt)
btntxt - btn-cancel, btn-follow, btn-null
*/

const UserBanner = ({ data, isFollow }) => {
  const URL = window.location.origin;
  return (
    <S.UserBannerWrapper>
      <S.UserImg src={data.image} />
      <S.UserInfo
        to={`../../../../profile/${data.accountname}`}
        relative='path'
      >
        <S.UserNickName>
          {data.username || '애월읍 위니브 감귤농장'}
        </S.UserNickName>
        <S.UserId>@ {data.accountname || '애월읍 위니브 감귤농장'}</S.UserId>
      </S.UserInfo>
      {isFollow === true && (
        <Button size='xs' tit='취소' isActive={false} txtcolor='white' />
      )}
      {isFollow === false && (
        <Button size='xs' tit='팔로우' isActive={!!true} txtcolor='white' />
      )}
      {isFollow === null && null}
    </S.UserBannerWrapper>
  );
};

export default UserBanner;
