import React from 'react';
import * as S from './InputBox.Style';

const InputBox = ({ label, placeholder, id }) => {
  return (
    <S.Box>
      <S.BoxTit htmlFor={id}>{label}</S.BoxTit>
      <S.BoxInp id={id} placeholder={placeholder} />
    </S.Box>
  );
};

export default InputBox;
