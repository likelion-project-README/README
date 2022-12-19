import * as S from './PostModal.Style';

/**
 * 1. 프로필
 * 2. 게시글
 * 3. 댓글
 * 4. 채팅방
 *
 * 사용시 modalType에 따라
 * profile, post, comment, chatRoom 입력
 */

const PostModal = ({ modalType }) => {
  if (modalType === 'profile') {
    return (
      <S.ModalWrap>
        <S.ModalCancleBtn />
        <S.ModalTxt>설정 및 개인정보</S.ModalTxt>
        <S.ModalTxt>로그아웃</S.ModalTxt>
      </S.ModalWrap>
    );
  }
  if (modalType === 'post') {
    return (
      <S.ModalWrap>
        <S.ModalCancleBtn />
        <S.ModalTxt>설정 및 개인정보</S.ModalTxt>
        <S.ModalTxt>로그아웃</S.ModalTxt>
      </S.ModalWrap>
    );
  }
  if (modalType === 'comment') {
    return (
      <S.ModalWrap>
        <S.ModalCancleBtn />
        <S.ModalTxt>삭제</S.ModalTxt>
        <S.ModalTxt>수정</S.ModalTxt>
        <S.ModalTxt>웹사이트에서 상품 보기</S.ModalTxt>
      </S.ModalWrap>
    );
  }
  if (modalType === 'chatRoom') {
    <S.ModalWrap>
      <S.ModalCancleBtn />
      <S.ModalTxt>채팅방 나가기</S.ModalTxt>
    </S.ModalWrap>;
  }
  return <div>오류</div>;
};
export default PostModal;
