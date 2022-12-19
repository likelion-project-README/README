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



*** 이전페이지 돌아가기버튼 (페이지 작성 및 Link 연결 후 추가작성)
import { useHistory } from "react-router-dom";
onClick={() => history.goBack() } 이용


postModal 먼저 작성 후, 아래 조건문 작성

MoreBtn의 경우 4가지 type이 존재
프로필, 게시글, 댓글, 채팅방
componentType = prifle, post, comment, chatRoom

 */

const TopBanner = ({ type, tit, componentType }) => {
  const navigate = useNavigate();
  if (type === 'top-basic-nav') {
    return (
      <S.BannerCont>
        <S.BackBtn
          onClick={() => {
            navigate(-1);
          }}
        />
        <S.MoreBtn />
      </S.BannerCont>
    );
  }
  if (type === 'top-search-nav') {
    return (
      <S.BannerCont>
        <S.BackBtn
          onClick={() => {
            navigate(-1);
          }}
        />
        <S.SearchInp />
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
          onClick={() => {
            navigate(-1);
          }}
        />
        <Button size='sm' state='active' tit='업로드' />
      </S.BannerCont>
    );
  }
  if (type === 'top-chat-nav') {
    return (
      <S.BannerCont>
        <S.BackBtn
          onClick={() => {
            navigate(-1);
          }}
        />
        <S.TitleDiv fontSize='14px'>{tit}</S.TitleDiv>
        <S.MoreBtn />
      </S.BannerCont>
    );
  }
  return <S.BannerCont>적절한 type을 전달해주세요</S.BannerCont>;
};

export default TopBanner;
