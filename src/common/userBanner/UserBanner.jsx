import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { followAPI, unfollowAPI } from '../../api/mandarinAPI';
import { accountnameData } from '../../atoms/LoginData';
import Button from '../button/Button';
import * as S from './UserBanner.Style';

/*
UserBanner 사용 명세

UserBanner(btntxt)
btntxt - btn-cancel, btn-follow, btn-null
*/

const UserBanner = ({ data }) => {
  const URL = window.location.origin;
  const [isFollow, setIsFollow] = useState(data.isfollow);
  const loginedAccount = useRecoilValue(accountnameData);
  const clickFollow = () => {
    if (isFollow) {
      unfollowAPI(data.accountname);
      setIsFollow(false);
    } else {
      followAPI(data.accountname);
      setIsFollow(true);
    }
  };
  return (
    <S.UserBannerWrapper>
      <S.UserImg src={data.image} />
      <S.UserInfo
        // 이거 상위 경로로 한번에 보내고싶은데 방법없나 ?
        to={`../../../../profile/${data.accountname}`}
        relative='path'
      >
        <S.UserNickName>
          {data.username || '애월읍 위니브 감귤농장'}
        </S.UserNickName>
        <S.UserId>@ {data.accountname || '애월읍 위니브 감귤농장'}</S.UserId>
      </S.UserInfo>
      {loginedAccount !== data.accountname && isFollow === true && (
        <Button
          size='xs'
          tit='취소'
          isActive={false}
          txtcolor='white'
          onClick={clickFollow}
        />
      )}
      {loginedAccount !== data.accountname && isFollow === false && (
        <Button
          size='xs'
          tit='팔로우'
          isActive={!!true}
          txtcolor='white'
          onClick={clickFollow}
        />
      )}
      {isFollow === null && null}
    </S.UserBannerWrapper>
  );
};

export default UserBanner;
