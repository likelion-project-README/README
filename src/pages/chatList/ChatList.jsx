import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostModal from '../../common/postModal/PostModal';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import * as S from './ChatList.Style';
import Alert from '../../common/alert/Alert';

const ChatList = () => {
  // 모달창 상태값 + 모달타입 상태값
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <S.ChatListWrap className='max-width min-width wrapper-contents'>
        <S.ChatListTit>채팅 리스트 페이지</S.ChatListTit>
        <TopBanner
          type='top-basic-nav'
          tit='프로필'
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setModalType={setModalType}
        />
        <S.List>
          <S.ChatWrap onClick={() => navigate('/chat/:id')}>
            <S.UserImg src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
            <S.UnreadCircle />
            <S.UserInfo>
              <S.UserNickName>숨참고딥다이브</S.UserNickName>
              <S.ChatInfo>
                <S.UserChat>모던 자바스크립트 팔렸나요?</S.UserChat>
                <S.ChatDate>2022.12.14</S.ChatDate>
              </S.ChatInfo>
            </S.UserInfo>
          </S.ChatWrap>
          <S.ChatWrap>
            <S.UserImg src='https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            <S.UnreadCircle />
            <S.UserInfo>
              <S.UserNickName>피터파커</S.UserNickName>
              <S.ChatInfo>
                <S.UserChat>책 취향이 너무 좋으셔서 연락드립니다 ☺️</S.UserChat>
                <S.ChatDate>2022.12.14</S.ChatDate>
              </S.ChatInfo>
            </S.UserInfo>
          </S.ChatWrap>
          <S.ChatWrap>
            <S.UserImg src='https://images.unsplash.com/photo-1592561040789-dbc5d9748568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            <S.UserInfo>
              <S.UserNickName>처리짱</S.UserNickName>
              <S.ChatInfo>
                <S.UserChat>
                  안녕하세요!!! 혹시 피드에 가장 최근에 올리신 책 제목 좀 알 수
                  있을까요??
                </S.UserChat>
                <S.ChatDate>2022.12.14</S.ChatDate>
              </S.ChatInfo>
            </S.UserInfo>
          </S.ChatWrap>
        </S.List>
        <TabMenu />
      </S.ChatListWrap>
      {isModalOpen ? (
        <PostModal
          modalType={modalType}
          setIsModalOpen={setIsModalOpen}
          modalData={modalData}
          isModalOpen={isModalOpen}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          setAlertType={setAlertType}
        />
      ) : null}
      {isAlertOpen ? (
        <Alert
          alertType={alertType}
          setIsAlertOpen={setIsAlertOpen}
          modalData={modalData}
        />
      ) : null}
    </>
  );
};

export default ChatList;
