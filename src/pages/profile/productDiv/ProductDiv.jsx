import React, { useEffect, useState } from 'react';
import { loadProductsAPI } from '../../../api/mandarinAPI';
import Product from '../../../common/product/Product';
import * as S from './ProductDiv.Style';

const ProductDiv = ({
  accountName,
  isModalOpen,
  isMine,
  setIsModalOpen,
  setModalType,
  setModalData,
}) => {
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
