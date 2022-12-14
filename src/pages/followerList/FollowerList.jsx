import React from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import UserBanner from '../../common/userBanner/UserBanner';
import * as S from './FollowerList.Style';

const FollowerList = () => {
  return (
    <S.FollowerListWrap>
      <S.FollowerListTit>팔로워 리스트 페이지</S.FollowerListTit>
      <TopBanner type='top-chat-nav' tit='Followers' />
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
    </S.FollowerListWrap>
  );
};

export default FollowerList;
