import { useNavigate } from 'react-router-dom';
import * as S from './PostModal.Style';
import Alert from '../alert/Alert';
import deleteProductsAPI from '../../api/deleteProductAPI';
import deletePostAPI from '../../api/deletePostAPI';
import deleteCommentAPI from '../../api/deleteCommentAPI';

/**
 * 1. 프로필
 * 2. 게시글
 * 3. 댓글
 * 4. 채팅방
 *
 * 사용시 modalType에 따라
 * profile, post, comment, chatRoom 입력
 */

const PostModal = ({ modalType, isModalOpen, setIsModalOpen, modalData }) => {
  const navigate = useNavigate();
  const clickOepnProduct = () => {
    setIsModalOpen(!isModalOpen);
    window.open(modalData.link, '_blank');
  };
  const clickDeleteProduct = () => {
    deleteProductsAPI(modalData.id).then((req) => {
      navigate(0);
    });
  };
  const clickEditProduct = () => {
    navigate(
      `/profile/${modalData.author.accountname}/editProduct/${modalData.id}`,
    );
  };
  const clickDeletePost = async () => {
    deletePostAPI(modalData.id).then((req) => navigate(-1));
  };
  const clickDeleteComment = () => {
    console.log(modalData);
    // deleteCommentAPI(postId, commentId, token)
  };
  if (modalType === 'profile') {
    return (
      <S.ModalWrap>
        <S.ModalOverlay>
          <S.ModalCancleBtn />
          <S.ModalTxt>설정 및 개인정보</S.ModalTxt>
          <S.ModalTxt>로그아웃</S.ModalTxt>
        </S.ModalOverlay>
      </S.ModalWrap>
    );
  }
  if (modalType === 'myProduct') {
    return (
      <S.ModalWrap>
        <S.ModalOverlay>
          <S.ModalCancleBtn />
          <S.ModalTxt onClick={clickDeleteProduct}>삭제</S.ModalTxt>
          <S.ModalTxt onClick={clickEditProduct}>수정</S.ModalTxt>
          <S.ModalTxt onClick={clickOepnProduct}>
            웹사이트에서 상품 보기
          </S.ModalTxt>
        </S.ModalOverlay>
      </S.ModalWrap>
    );
  }
  if (modalType === 'yourProduct') {
    return (
      <S.ModalWrap>
        <S.ModalOverlay>
          <S.ModalCancleBtn />
          <S.ModalTxt onClick={clickOepnProduct}>
            웹사이트에서 상품 보기
          </S.ModalTxt>
        </S.ModalOverlay>
      </S.ModalWrap>
    );
  }
  if (modalType === 'myPost') {
    return (
      <S.ModalWrap>
        <S.ModalOverlay>
          <S.ModalCancleBtn />
          <S.ModalTxt onClick={clickDeletePost}>삭제</S.ModalTxt>
        </S.ModalOverlay>
      </S.ModalWrap>
    );
  }
  if (modalType === 'yourPost') {
    return (
      <S.ModalWrap>
        <S.ModalOverlay>
          <S.ModalCancleBtn />
          <S.ModalTxt onClick={() => navigate(0)}>신고하기</S.ModalTxt>
        </S.ModalOverlay>
      </S.ModalWrap>
    );
  }
  if (modalType === 'myComment') {
    return (
      <S.ModalWrap>
        <S.ModalOverlay>
          <S.ModalCancleBtn />
          <S.ModalTxt onClick={clickDeleteComment}>삭제</S.ModalTxt>
        </S.ModalOverlay>
      </S.ModalWrap>
    );
  }
  if (modalType === 'yourComment') {
    return (
      <S.ModalWrap>
        <S.ModalOverlay>
          <S.ModalCancleBtn />
          <S.ModalTxt onClick={() => navigate(0)}>신고하기</S.ModalTxt>
        </S.ModalOverlay>
      </S.ModalWrap>
    );
  }
  if (modalType === 'chatRoom') {
    return (
      <S.ModalWrap>
        <S.ModalOverlay>
          <S.ModalCancleBtn />
          <S.ModalTxt>채팅방 나가기</S.ModalTxt>
        </S.ModalOverlay>
      </S.ModalWrap>
    );
  }
  return <div>오류</div>;
};
export default PostModal;
