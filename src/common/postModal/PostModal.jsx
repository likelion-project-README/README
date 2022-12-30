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
  setIsAlertOpen,
  modalData,
  setAlertType,
}) => {
  const navigate = useNavigate();

  const clickOepnProduct = () => {
    setIsModalOpen(!isModalOpen);
    // window.open(modalData.link, '_blank');
    window.open('https://github.com/likelion-project-README/README', '_blank');
  };
  const clickEditProduct = (e) => {
    navigate(
      `/profile/${modalData.author.accountname}/editProduct/${modalData.id}`,
    );
  };
  const clickEditPost = (e) => {
    navigate(`/post/${modalData.id}/editPost`);
  };
  const clickDeleteProduct = () => {
    setAlertType('deleteProduct');
    setIsAlertOpen(true);
    setIsModalOpen(false);
  };
  const clickDeletePost = async () => {
    setAlertType('deletePost');
    setIsAlertOpen(true);
    setIsModalOpen(false);
  };
  const clickDeleteComment = async () => {
    setAlertType('deleteComment');
    setIsAlertOpen(true);
    setIsModalOpen(false);
  };

  const clickLogOut = () => {
    setAlertType('logout');
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
          <S.ModalTxt onClick={clickEditPost}>수정</S.ModalTxt>
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
          <S.ModalTxt onClick={() => navigate(-1)}>채팅방 나가기</S.ModalTxt>
        </S.ModalOverlay>
      </S.ModalWrap>
    );
  }
  return <div>오류</div>;
};
export default PostModal;
