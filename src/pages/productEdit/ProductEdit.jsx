import React from 'react';
// import styled from 'styled-components';
import TopBanner from '../../common/topBanner/TopBanner';
// import sprite from '../../assets/css_sprites.png';
import * as S from './ProductEdit.Style';

// const ProductEditWrap = styled.section`
//   width: 390px;
// `;

// const ProductEditTit = styled.h2`
//   /* ir */
//   position: absolute;
//   left: -10000px;
//   top: auto;
//   width: 1px;
//   height: 1px;
//   overflow: hidden;
// `;

// const ImgWrap = styled.div`
//   margin: 30px 34px;
//   height: 236px;
// `;

// const ImgUploadTit = styled.p`
//   font-size: 12px;
//   color: var(--sub-text-color);
//   margin-bottom: 18px;
// `;

// const ImgBox = styled.img.attrs({
//   alt: '유저 상품 이미지',
//   src: 'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
// })`
//   width: 322px;
//   height: 204px;
//   border-radius: 10px;
//   object-fit: cover;
//   border: 0.5px solid #dbdbdb;
// `;

// const ImgUploadBtn = styled.button`
//   position: relative;
//   top: -46px;
//   left: 274px;
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   background: url(${sprite}) -57.5px -2.5px / 183px 144px;
// `;

// const ImgUploadLab = styled.label`
//   /* ir */
//   position: absolute;
//   left: -10000px;
//   top: auto;
//   width: 1px;
//   height: 1px;
//   overflow: hidden;
// `;

// const ImgUploadInp = styled.input`
//   /* ir */
//   position: absolute;
//   left: -10000px;
//   top: auto;
//   width: 1px;
//   height: 1px;
//   overflow: hidden;
// `;

// const InputBox = styled.div`
//   width: 322px;
//   height: 48px;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin: 0 34px 16px 34px;
// `;

// const InputBoxTit = styled.label`
//   margin-left: 2px;
//   font-weight: 500;
//   font-size: 12px;
//   color: var(--sub-text-color);
// `;

// const InputBoxInp = styled.input`
//   font-size: 14px;
//   color: var(--main-text-color);
//   padding-bottom: 8px;
//   border: none;
//   border-bottom: 1px solid #dbdbdb;
//   text-overflow: ellipsis;
//   &::placeholder {
//     color: #dbdbdb;
//   }
// `;

const ProductEdit = () => {
  return (
    <S.ProductEditWrap>
      <S.ProductEditTit>상품 수정 페이지</S.ProductEditTit>
      {/* 업로드 -> 저장으로 텍스트 바꿔야함 */}
      <TopBanner type='top-upload-nav' />
      <form>
        <S.ImgWrap>
          <S.ImgUploadTit>이미지 등록</S.ImgUploadTit>
          <S.ImgBox />
          <S.ImgUploadBtn />
          <S.ImgUploadLab htmlFor='productImg' />
          <S.ImgUploadInp type='file' id='productImg' />
        </S.ImgWrap>
        <S.InputBox>
          <S.InputBoxTit htmlFor='productName'>상품명</S.InputBoxTit>
          <S.InputBoxInp
            placeholder='2~15자 이내여야 합니다.'
            id='productName'
            minLength='2'
            maxLength='15'
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputBoxTit htmlFor='productPrice'>가격</S.InputBoxTit>
          <S.InputBoxInp
            placeholder='숫자만 입력 가능합니다.'
            id='productPrice'
            type='number'
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputBoxTit htmlFor='productURL'>판매 링크</S.InputBoxTit>
          <S.InputBoxInp placeholder='URL을 입력해 주세요.' id='productURL' />
        </S.InputBox>
      </form>
    </S.ProductEditWrap>
  );
};

export default ProductEdit;
