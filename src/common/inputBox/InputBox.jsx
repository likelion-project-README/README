import React, { useEffect } from 'react';
import * as S from './InputBox.Style';

const InputBox = ({ label, placeholder, id, type, min, max, setInput }) => {
  const inputHandle = (e) => {
    setInput(e.target.value);
  };

  return (
    <S.Box>
      <S.BoxTit htmlFor={id}>{label}</S.BoxTit>
      <S.BoxInp
        id={id}
        placeholder={placeholder}
        type={type}
        minLength={min}
        maxLength={max}
        onChange={inputHandle}
      />
    </S.Box>
  );
};

export default InputBox;
