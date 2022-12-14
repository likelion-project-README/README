import React from 'react';
import * as S from './InputBox.Style';

const InputBox = ({ label, placeholder, id, type, min, max }) => {
  return (
    <S.Box>
      <S.BoxTit htmlFor={id}>{label}</S.BoxTit>
      <S.BoxInp
        id={id}
        placeholder={placeholder}
        type={type}
        minLength={min}
        maxLength={max}
      />
    </S.Box>
  );
};

export default InputBox;
