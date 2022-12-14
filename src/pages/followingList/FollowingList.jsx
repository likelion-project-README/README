import React from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import UserBanner from '../../common/userBanner/UserBanner';
import * as S from './FollowingList.Style';

const FollowingList = () => {
  return (
    <S.FollowingListWrap>
      <S.FollowingListTit>팔로워 리스트 페이지</S.FollowingListTit>
      <TopBanner type='top-chat-nav' tit='Followings' />
      <S.ListCont>
        <S.List>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
          <li>
            <UserBanner />
          </li>
        </S.List>
      </S.ListCont>
      <S.TabMenuWrap>
        <TabMenu />
      </S.TabMenuWrap>
    </S.FollowingListWrap>
  );
};

export default FollowingList;
