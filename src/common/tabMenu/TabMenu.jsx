import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate, useMatch, useParams } from 'react-router-dom';
import { accountnameData } from '../../atoms/LoginData';
import * as S from './TabMenu.Style';

const TabMenu = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const loginedAccountName = useRecoilValue(accountnameData);

  const isMatchHome = useMatch('/home');
  const isMatchChat = useMatch('/chat');
  const isMatchProfile = useMatch('/profile/:id');

  return (
    <S.TabMenuCont>
      <S.TabMenuUl>
        <S.TabMenuLi
          onClick={() => {
            navigate('/home');
          }}
        >
          <S.IconImg
            backgroundPosition={
              isMatchHome === null ? '-98px 0px' : '-98px -24px'
            }
          />
          <S.IconTit>홈</S.IconTit>
        </S.TabMenuLi>
        <S.TabMenuLi
          onClick={() => {
            navigate('/chat');
          }}
        >
          <S.IconImg
            backgroundPosition={
              isMatchChat === null ? '-24px -86px' : '-98px -48px'
            }
          />
          <S.IconTit>채팅</S.IconTit>
        </S.TabMenuLi>
        <S.TabMenuLi
          onClick={() => {
            navigate('/post/upload');
          }}
        >
          <S.IconImg backgroundPosition='-24px -62px' />
          <S.IconTit>게시물 작성</S.IconTit>
        </S.TabMenuLi>
        <S.TabMenuLi
          onClick={() => {
            if (id !== loginedAccountName) {
              window.location.assign(`/profile/${loginedAccountName}`);
            }
            // navigate(`/profile/${loginedAccountName}`);
            // window.location.reload();
          }}
        >
          <S.IconImg
            backgroundPosition={
              isMatchProfile === null ? '-48px -86px' : '-72px -86px'
            }
          />
          <S.IconTit>프로필</S.IconTit>
        </S.TabMenuLi>
      </S.TabMenuUl>
    </S.TabMenuCont>
  );
};

export default TabMenu;
