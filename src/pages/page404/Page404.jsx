import React from 'react';
import Button from '../../common/button/Button';
import * as S from './Page404.Style';

const Page404 = () => {
  return (
    <S.PageWrap>
      <S.PageTit>404 페이지</S.PageTit>
      <S.LogoImg />
      <S.Message>페이지를 찾을 수 없습니다. :(</S.Message>
      <Button tit='이전 페이지' txtcolor='black' />
    </S.PageWrap>
  );
};

export default Page404;
