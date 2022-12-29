import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import * as S from './TopBanner.Style';
/*
TopBanner 사용 명세
TopBanner(type, tit) 
type ='12월12일 피그마 버튼 이름 기준
tit = 넘어가는 페이지의 제목 (ex. 감귤마켓 피드)

type 종류 (피그마 이름 기준)
'top-basic-nav'
'top-search-nav'
'top-main-nav'
'top-upload-nav'
'top-chat-nav'
'top-follow-nav'

postModal 먼저 작성 후, 아래 조건문 작성

MoreBtn의 경우 4가지 type이 존재
MoreBtn 클릭시 PostModal
프로필, 게시글, 댓글, 채팅방
componentType = profile, post, comment, chatRoom


 */

const TopBanner = ({
  type,
  tit,
  isActive,
  isModalOpen,
  setIsModalOpen,
  setModalType,
  setSearchVal,
}) => {
  const navigate = useNavigate();
  const testHandle = () => {
    if (type === 'top-basic-nav') {
      setModalType('profile');
    }
    if (type === 'top-chat-nav') {
      setModalType('chatRoom');
    }
    setIsModalOpen(!isModalOpen);
  };
  const handleChangeInp = (e) => {
    setSearchVal(e.target.value);
  };
  if (type === 'top-basic-nav') {
    return (
      <S.BannerCont>
        <S.BackBtn
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        />
        <S.MoreBtn onClick={testHandle} data-moreBtn='true' />
      </S.BannerCont>
    );
  }
  if (type === 'top-search-nav') {
    return (
      <S.BannerCont>
        <S.BackBtn
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        />
        <S.SearchInp onChange={handleChangeInp} />
      </S.BannerCont>
    );
  }
  if (type === 'top-main-nav') {
    return (
      <S.BannerCont>
        <S.TitleDiv fontSize='18px'>{tit}</S.TitleDiv>
        <S.SearchBtn to='/search' />
      </S.BannerCont>
    );
  }
  if (type === 'top-upload-nav') {
    return (
      <S.BannerCont>
        <S.BackBtn
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        />
        <Button size='sm' isActive={isActive} tit={tit} />
      </S.BannerCont>
    );
  }
  if (type === 'top-follow-nav') {
    return (
      <S.BannerCont>
        <S.BackBtn
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        />
        <S.TitleDiv fontSize='14px'>{tit}</S.TitleDiv>
      </S.BannerCont>
    );
  }
  if (type === 'top-chat-nav') {
    return (
      <S.BannerCont>
        <S.BackBtn
          type='button'
          onClick={() => {
            navigate(-1);
          }}
        />
        <S.TitleDiv fontSize='14px'>{tit}</S.TitleDiv>
        <S.MoreBtn onClick={testHandle} data-moreBtn='true' />
      </S.BannerCont>
    );
  }
  return <S.BannerCont>적절한 type을 전달해주세요</S.BannerCont>;
};

export default TopBanner;
