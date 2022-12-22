import React, { useEffect } from 'react';
import * as S from './InputBox.Style';

/* InputBox 사용 명세
label : label로 쓰일 텍스트입니다.
placeholder : placeholder로 쓰일 텍스트입니다.
id : input의 id값입니다.
type : input의 type입니다.
min : input의 minLength입니다.
max : input의 maxLength입니다.
value : input의 value입니다.
onChange : input의 value가 변경될 때의 이벤트를 입력해 주세요.
onBlur : input에서 포커스가 해제될 때의 이벤트를 입력해 주세요.

<유효성 검사 관련>
bottomColor : 'red'를 입력하면 border-bottom이 빨간색으로 나타나며, 미입력시 기본 회색이 들어갑니다.
message : 유효성 검사 결과 메시지를 입력합니다.
display : 'yes'를 입력하면 message가 나타납니다. 미입력시 message가 있어도 나타나지 않습니다.
*/

const InputBox = ({
  label,
  placeholder,
  id,
  type,
  min,
  max,
  bottomColor,
  display,
  message,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <>
      <S.Box>
        <S.BoxTit htmlFor={id}>{label}</S.BoxTit>
        <S.BoxInp
          id={id}
          placeholder={placeholder}
          type={type}
          minLength={min}
          maxLength={max}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          bottomColor={bottomColor}
        />
      </S.Box>
      <S.InpMessage display={display}>{message}</S.InpMessage>
    </>
  );
};

export default InputBox;
