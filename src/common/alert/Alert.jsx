import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './Alert.Style';
import * as L from '../../atoms/LoginData';
import {
  deleteCommentAPI,
  deletePostAPI,
  deleteProductsAPI,
} from '../../api/mandarinAPI';

/**
 * alert 종류
 * 1. 로그아웃
 * 2. 게시글 삭제
 * 3. 상품 삭제
 * 4. 댓글 삭제
 *
 * 방법1. type만 받아서 Alert 컴포넌트 내에서 if문으로 리턴처리
 * 방법2. message, btnTxt, type 다 받아서 Alert.jsx 파일을 최소화
 * 방법1로 가자
 */

const Alert = ({ setIsAlertOpen, alertType, modalData, commentId }) => {
  const navigate = useNavigate();
  const resetUsernameData = useSetRecoilState(L.accountnameData);
  const resetAccountnameData = useSetRecoilState(L.accountnameData);
  const resetEmailData = useSetRecoilState(L.emailData);
  const resetPasswordData = useSetRecoilState(L.passwordData);
  const resetProfileImageData = useSetRecoilState(L.profileImageData);
  const resetIntroData = useSetRecoilState(L.introData);
  const [message, setMessage] = useState('');
  const [btnTxt, setBtnTxt] = useState('');
  const params = useParams();

  const logOut = () => {
    // 토큰 삭제
    // recoil-persist 삭제
    // atom reset
    resetUsernameData('');
    resetAccountnameData('');
    resetEmailData('');
    resetPasswordData('');
    resetProfileImageData('');
    resetIntroData('');
    localStorage.removeItem('token');
    localStorage.removeItem('recoil-persist');
  };
  useEffect(() => {
    if (alertType === 'logout') {
      setMessage('로그아웃하시겠습니까?');
      setBtnTxt('로그아웃');
    }

    if (alertType === 'deletePost') {
      setMessage('게시글을 삭제하시겠습니까?');
      setBtnTxt('삭제');
    }
    if (alertType === 'deleteProduct') {
      setMessage('상품을 삭제하시겠습니까?');
      setBtnTxt('삭제');
    }
    if (alertType === 'deleteComment') {
      setMessage('댓글을 삭제하시겠습니까?');
      setBtnTxt('삭제');
    }
  }, []);
  const clickConfirm = async () => {
    if (alertType === 'logout') {
      setIsAlertOpen(false);
      await logOut();
      // alert('로그아웃되었습니다.'); // eslint-disable-line no-alert
      navigate('/');
    }
    if (alertType === 'deletePost') {
      deletePostAPI(modalData.id).then((req) => {
        if (window.location.pathname.split('/')[1] === 'profile') {
          navigate(0);
        } else {
          navigate(-1);
        }
      });
    }
    if (alertType === 'deleteProduct') {
      deleteProductsAPI(modalData.id).then((req) => {
        navigate(0);
      });
    }
    if (alertType === 'deleteComment') {
      await deleteCommentAPI(
        params.id,
        commentId.id,
        localStorage.getItem('token'),
      ).then(() => {
        navigate(0);
      });
    }
  };
  return (
    <S.AlertBg onClick={() => setIsAlertOpen(false)}>
      <S.AlertCont>
        <S.AlertOverlay>
          <S.AlertTxt>{message}</S.AlertTxt>
          <S.BtnWrap>
            <S.Btn
              color='var(--main-text-color)'
              border='0.5px solid #dbdbdb'
              onClick={(e) => {
                setIsAlertOpen(false);
              }}
            >
              취소
            </S.Btn>
            <S.Btn color='var(--main-color)' onClick={clickConfirm}>
              {btnTxt}
            </S.Btn>
          </S.BtnWrap>
        </S.AlertOverlay>
      </S.AlertCont>
    </S.AlertBg>
  );
};

export default Alert;
