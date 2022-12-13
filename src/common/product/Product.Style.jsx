import styled from 'styled-components';

export const ProductWrapper = styled.article`
  width: 140px;
  height: 132px;
  background-color: #fff;
`;

export const ProductImage = styled.div`
  width: 140px;
  height: 90px;
  margin-bottom: 6px;
  background: url(.jpg) black;
  border: 0.5px solid #dbdbdb;
  border-radius: 8px;
`;

export const ProductName = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-left: 2px;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  margin-left: 2px;
  color: var(--main-color);
`;
