import React from 'react';
import * as S from './Alert.Style';

const Alert = ({ message, buttonText }) => {
  return (
    <S.AlertCont>
      <S.AlertTxt>{message}</S.AlertTxt>
      <S.BtnWrap>
        <S.Btn color='var(--main-text-color)' border='0.5px solid #dbdbdb'>
          취소
        </S.Btn>
        <S.Btn color='var(--main-color)'>{buttonText}</S.Btn>
      </S.BtnWrap>
    </S.AlertCont>
  );
};

export default Alert;
