import React from 'react';
import * as S from './inputBox.Style';

const InputBox = ({ label, placeholder }) => {
  return (
    <S.Box>
      <S.BoxTit>{label}</S.BoxTit>
      <S.BoxInp placeholder={placeholder} />
    </S.Box>
  );
};

export default InputBox;
