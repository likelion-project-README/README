import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import * as S from './PostModal.Style';
import Alert from '../alert/Alert';
import deleteProductsAPI from '../../api/deleteProductAPI';
import deletePostAPI from '../../api/deletePostAPI';
import deleteCommentAPI from '../../api/deleteCommentAPI';
import * as L from '../../atoms/LoginData';

/**
 * 음 로그아웃
 *
 */

const PostModal = ({
  modalType,
  isModalOpen,
  setIsModalOpen,
  isAlertOpen,
  setIsAlertOpen,
  modalData,
  commentId,
}) => {
  const navigate = useNavigate();
  const postId = useParams();

  const clickOepnProduct = () => {
    setIsModalOpen(!isModalOpen);
    window.open(modalData.link, '_blank');
  };
  const clickDeleteProduct = () => {
    deleteProductsAPI(modalData.id).then((req) => {
      alert('상품이 삭제되었습니다.');
      navigate(0);
    });
  };
  const clickEditProduct = () => {
    navigate(
      `/profile/${modalData.author.accountname}/editProduct/${modalData.id}`,
    );
  };
  const clickDeletePost = async () => {
    console.log(window.location.pathname.split('/')[1]);

    deletePostAPI(modalData.id).then((req) => {
      alert('게시글이 삭제되었습니다.');
      if (window.location.pathname.split('/')[1] === 'profile') {
        navigate(0);
      } else {
        navigate(-1);
      }
    });
  };
  const clickDeleteComment = async () => {
    // console.log(postId.id);
    await deleteCommentAPI(postId.id, commentId, localStorage.getItem('token'));
    alert('댓글이 삭제되었습니다.');
    navigate(0);
  };

  const clickLogOut = () => {
    console.log(isAlertOpen);
    setIsAlertOpen(true);
    setIsModalOpen(false);
  };

  if (modalType === 'profile') {
    return (
      <S.ModalWrap>
        <S.ModalOverlay>
          <S.ModalCancleBtn />
          <S.ModalTxt>설정 및 개인정보</S.ModalTxt>
          <S.ModalTxt onClick={clickLogOut}>로그아웃</S.ModalTxt>
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
