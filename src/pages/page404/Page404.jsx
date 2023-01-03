import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/button/Button';
import * as S from './Page404.Style';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <S.PageWrap className='min-width'>
      <div>
        <S.PageTit>404 페이지</S.PageTit>
        <S.LogoImg />
        <S.Message>페이지를 찾을 수 없습니다. :(</S.Message>
        <Button
          tit='이전 페이지'
          txtcolor='black'
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
    </S.PageWrap>
  );
};

export default Page404;
