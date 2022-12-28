import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './Alert.Style';
import * as L from '../../atoms/LoginData';

const Alert = ({ message, buttonText, setIsAlertOpen }) => {
  const navigate = useNavigate();
  const resetUsernameData = useSetRecoilState(L.accountnameData);
  const resetAccountnameData = useSetRecoilState(L.accountnameData);
  const resetEmailData = useSetRecoilState(L.emailData);
  const resetPasswordData = useSetRecoilState(L.passwordData);
  const resetProfileImageData = useSetRecoilState(L.profileImageData);
  const resetIntroData = useSetRecoilState(L.introData);

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
  const clickCancle = () => {
    setIsAlertOpen(false);
  };
  const clickConfirm = async () => {
    if (buttonText === '로그아웃') {
      console.log('하하로그아웃해야지!');
      setIsAlertOpen(false);
      await logOut();
      alert('로그아웃되었습니다.');
      navigate('../../../login');
    }
  };
  return (
    <S.AlertCont>
      <S.AlertOverlay>
        <S.AlertTxt>{message}</S.AlertTxt>
        <S.BtnWrap>
          <S.Btn
            color='var(--main-text-color)'
            border='0.5px solid #dbdbdb'
            onClick={clickCancle}
          >
            취소
          </S.Btn>
          <S.Btn color='var(--main-color)' onClick={clickConfirm}>
            {buttonText}
          </S.Btn>
        </S.BtnWrap>
      </S.AlertOverlay>
    </S.AlertCont>
  );
};

export default Alert;
