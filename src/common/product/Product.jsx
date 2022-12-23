import React from 'react';
import * as S from './Product.Style';

// 모달창 버튼구현
// yourProduct와 myProduct 어떻게 구분?
// atom 으로 로그인 유저상태 관리해줘야 편할듯,,

const Product = ({
  isModalOpen,
  setIsModalOpen,
  setModalType,
  setModalData,
  data,
}) => {
  const productHandle = () => {
    setModalType('myProduct');
    setModalData(data);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <S.ProductWrapper onClick={productHandle}>
      <S.ProductImage imageURL={data.itemImage} />
      <S.ProductName>{data.itemName || '애월읍 노지 감귤'}</S.ProductName>
      <S.ProductPrice>{data.price || '35,000원'}</S.ProductPrice>
    </S.ProductWrapper>
  );
};

export default Product;
