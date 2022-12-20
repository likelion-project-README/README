import React, { useState, useEffect } from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import InputBox from '../../common/inputBox/InputBox';
import * as S from './ProductEdit.Style';

const ProductEdit = () => {
  const [btnActive, setBtnActive] = useState(false);
  // 추후 이미지 업로드 기능 완료시, 업로드여부 판별에 따라
  // 아래 useEffect 훅 수정
  const [productImg, setProductImg] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productURL, setProductURL] = useState('');
  useEffect(() => {
    if (productName && productPrice && productURL) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [productName, productPrice, productURL]);
  return (
    <S.ProductEditWrap>
      <S.ProductEditTit>상품 수정 페이지</S.ProductEditTit>
      {/* 업로드 -> 저장으로 텍스트 바꿔야함 */}
      <TopBanner type='top-upload-nav' tit='저장' isActive={btnActive} />
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
          min='2'
          max='15'
          setInput={setProductName}
        />
        <InputBox
          label='가격'
          id='productPrice'
          placeholder='숫자만 입력 가능합니다.'
          setInput={setProductPrice}
        />
        <InputBox
          label='판매 링크'
          id='productURL'
          placeholder='URL을 입력해 주세요.'
          setInput={setProductURL}
        />
      </form>
    </S.ProductEditWrap>
  );
};

export default ProductEdit;
