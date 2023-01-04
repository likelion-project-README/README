import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import UserBanner from '../../common/userBanner/UserBanner';
import * as S from './FollowerList.Style';
import { loadFollowerListAPI } from '../../api/mandarinAPI';

const FollowerList = () => {
  const [isFollwer, setIsFollower] = useState(null);
  const accountname = useParams().id;

  const loadFollowers = () => {
    loadFollowerListAPI(accountname).then((data) => {
      setIsFollower(data);
    });
  };
  useEffect(() => {
    loadFollowers();
  }, []);
  return (
    <S.FollowerListWrap className='max-width min-width wrapper-contents'>
      <S.FollowerListTit>팔로워 리스트 페이지</S.FollowerListTit>
      <TopBanner type='top-follow-nav' tit='Followers' />
      <S.ListCont>
        <S.List>
          {isFollwer &&
            isFollwer.map((item) => (
              <UserBanner key={item.accountname} data={item} />
            ))}
        </S.List>
      </S.ListCont>
      <S.TabMenuWrap>
        <TabMenu />
      </S.TabMenuWrap>
    </S.FollowerListWrap>
  );
};

export default FollowerList;
