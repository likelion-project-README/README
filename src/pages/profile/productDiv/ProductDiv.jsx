import React, { useEffect, useState } from 'react';
import loadProductsAPI from '../../../api/loadProductsAPI';
import Product from '../../../common/product/Product';
import * as S from './ProductDiv.Style';

// 모달창 처리를 어떻게 할까... ?
// 방법1. state 사용하기
// 방법2. useRef 사용해보기

const ProductDiv = ({
  accountName,
  isModalOpen,
  isMine,
  setIsModalOpen,
  setModalType,
  setModalData,
}) => {
  // 사용자 판매상품 유무 확인 및 데이터
  const [isProductLoad, setIsProductLoad] = useState(null);

  const loadProduct = async () => {
    await loadProductsAPI(accountName).then((data) => {
      if (data.data > 0) {
        setIsProductLoad(data.product);
      }
    });
  };
  useEffect(() => {
    loadProduct();
  }, []);
  if (isProductLoad !== null) {
    return (
      <S.ProductDiv>
        <S.ProductSpan>판매중인 상품</S.ProductSpan>
        <S.ProductCaro>
          {isProductLoad.map((item) => (
            <Product
              key={item.id}
              data={item}
              isModalOpen={isModalOpen}
              isMine={isMine}
              setIsModalOpen={setIsModalOpen}
              setModalType={setModalType}
              setModalData={setModalData}
            />
          ))}
        </S.ProductCaro>
      </S.ProductDiv>
    );
  }
  return null;
};

export default ProductDiv;
