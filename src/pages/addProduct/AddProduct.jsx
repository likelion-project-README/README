import React from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import * as S from './AddProduct.Style';

const AddProduct = () => {
  return (
    <S.AddProductWrap>
      <S.AddProductTit>상품 등록 페이지</S.AddProductTit>
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
    </S.AddProductWrap>
  );
};

export default AddProduct;
