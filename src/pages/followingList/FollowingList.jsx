import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import UserBanner from '../../common/userBanner/UserBanner';
import * as S from './FollowingList.Style';
import loadFollowingListAPI from '../../api/loadFollowingListAPI';

const FollowingList = () => {
  const [isFollowing, setIsFollowing] = useState(null);
  const accountname = useParams().id;
  const loadFollowing = () => {
    loadFollowingListAPI(accountname).then((data) => {
      setIsFollowing(data);
    });
  };
  useEffect(() => {
    loadFollowing();
  }, []);
  return (
    <S.FollowingListWrap>
      <S.FollowingListTit>팔로잉 리스트 페이지</S.FollowingListTit>
      <TopBanner type='top-follow-nav' tit='Followings' />
      <S.ListCont>
        <S.List>
          {isFollowing &&
            isFollowing.map((item) => (
              <UserBanner
                key={item.accountname}
                data={item}
                state='btn-active'
                isFollow={item.isfollow}
              />
            ))}
        </S.List>
      </S.ListCont>
      <S.TabMenuWrap>
        <TabMenu />
      </S.TabMenuWrap>
    </S.FollowingListWrap>
  );
};

export default FollowingList;
