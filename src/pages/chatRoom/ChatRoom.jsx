import TopBanner from '../../common/topBanner/TopBanner';
import * as S from './ChatRoom.Style';

const ChatRoom = () => {
  return (
    <S.ChatRoom>
      <S.ChatRoomTit>채팅방 페이지</S.ChatRoomTit>
      <S.TopBannerCont>
        <TopBanner type='top-chat-nav' tit='서귀포 책벌레' />
      </S.TopBannerCont>
      <S.ChatCont>
        {/* 상대 메세지 - 텍스트 */}
        <S.YourMsgCont>
          <S.YourMsgProfileImg src='' alt='' />
          <S.YourMsgTxt>상대방 메세지</S.YourMsgTxt>
          <S.CreatedTime>12:39</S.CreatedTime>
        </S.YourMsgCont>
        {/* 상대 메세지 - 이미지 */}
        <S.YourMsgCont>
          <S.YourMsgProfileImg src='' alt='' />
          <S.YourMsgImg
            src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
            alt=''
          />
          <S.CreatedTime>12:39</S.CreatedTime>
        </S.YourMsgCont>
        {/* 내 메세지 - 텍스트 */}
        <S.MyMsgCont>
          <S.MyMsgTxt>내 메세지</S.MyMsgTxt>
          <S.CreatedTime>12:50</S.CreatedTime>
        </S.MyMsgCont>
        {/* 내 메세지 - 이미지 */}
        <S.MyMsgCont>
          <S.MyMsgImg
            src='https://cdn.pixabay.com/photo/2022/12/02/14/13/desert-7630943__340.jpg'
            alt=''
          />
          <S.CreatedTime>12:51</S.CreatedTime>
        </S.MyMsgCont>
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
    // 아래에 모달이 들어갑니다(채팅방 나가기)
  );
};

export default ChatRoom;
