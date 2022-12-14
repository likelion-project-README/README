import React from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import InputBox from '../../common/inputBox/InputBox';
import * as S from './ProductEdit.Style';

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
        <InputBox
          label='상품명'
          id='productName'
          placeholder='2~15자 이내여야 합니다.'
        />
        <InputBox
          label='가격'
          id='productPrice'
          placeholder='숫자만 입력 가능합니다.'
        />
        <InputBox
          label='판매 링크'
          id='productURL'
          placeholder='URL을 입력해 주세요.'
        />
      </form>
    </S.ProductEditWrap>
  );
};

export default ProductEdit;
