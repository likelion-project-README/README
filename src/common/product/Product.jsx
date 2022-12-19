import React from 'react';
import * as S from './Product.Style';

const Product = ({ isModalOpen, setIsModalOpen, setModalType }) => {
  const productHandle = () => {
    setModalType('myProduct');
    setIsModalOpen(!isModalOpen);
  };
  return (
    <S.ProductWrapper onClick={productHandle}>
      <S.ProductImage />
      <S.ProductName>애월읍 노지 감귤</S.ProductName>
      <S.ProductPrice>35,000원</S.ProductPrice>
    </S.ProductWrapper>
  );
};

export default Product;
