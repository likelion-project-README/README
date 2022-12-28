import { useState } from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import PostModal from '../../common/postModal/PostModal';
import defaultProfile from '../../assets/logo-profile.svg';
import * as S from './ChatRoom.Style';

const ChatRoom = () => {
  // 모달창 상태값 + 모달타입 상태값
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  return (
    <>
      <S.ChatRoom>
        <S.ChatRoomTit>채팅방 페이지</S.ChatRoomTit>
        <S.TopBannerCont>
          <TopBanner
            type='top-chat-nav'
            tit='숨참고 딥다이브'
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setModalType={setModalType}
          />
        </S.TopBannerCont>
        <S.ChatCont>
          {/* 상대 메세지 - 텍스트 */}
          <S.YourMsgCont>
            <S.YourMsgProfileImg src={defaultProfile} alt='' />
            <S.YourMsgTxt>안녕하세요!</S.YourMsgTxt>
            <S.CreatedTime>12:39</S.CreatedTime>
          </S.YourMsgCont>
          {/* 내 메세지 - 텍스트 */}
          <S.MyMsgCont>
            <S.MyMsgTxt>안녕하세요ㅎㅎ</S.MyMsgTxt>
            <S.CreatedTime>12:50</S.CreatedTime>
          </S.MyMsgCont>
          <S.YourMsgCont>
            <S.YourMsgProfileImg src={defaultProfile} alt='' />
            <S.YourMsgTxt>모던 자바스크립트 팔렸나요?</S.YourMsgTxt>
            <S.CreatedTime>12:55</S.CreatedTime>
          </S.YourMsgCont>
          {/* 내 메세지 - 이미지 */}
          {/* <S.MyMsgCont>
            <S.MyMsgImg
              src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
              alt=''
            />
            <S.CreatedTime>12:51</S.CreatedTime>
          </S.MyMsgCont> */}
          {/* 상대 메세지 - 이미지 */}
          {/* <S.YourMsgCont>
            <S.YourMsgProfileImg src='' alt='' />
            <S.YourMsgImg
              src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
              alt=''
            />
            <S.CreatedTime>12:39</S.CreatedTime>
          </S.YourMsgCont> */}
        </S.ChatCont>
        <S.ChatForm action=''>
          <S.FileInpLab htmlFor='fileInp'>
            <input
              type='file'
              name=''
              id='fileInp'
              accept='image/*'
              className='hidden'
            />
          </S.FileInpLab>
          <S.TxtInp type='text' placeholder='메시지 입력하기...' id='txtInp' />
          <S.SubmitBtn type='button'>전송</S.SubmitBtn>
        </S.ChatForm>
      </S.ChatRoom>
      {isModalOpen ? (
        <PostModal modalType={modalType} setIsModalOpen={setIsModalOpen} />
      ) : null}
    </>
  );
};

export default ChatRoom;
