import styled from 'styled-components';

export const ProductWrapper = styled.article`
  width: 140px;
  height: 138px;
  background-color: #fff;
  cursor: pointer;
`;

export const ProductImage = styled.div`
  width: 140px;
  height: 90px;
  margin-bottom: 6px;
  background: url(${(props) => props.imageURL}) no-repeat center;
  border: 0.5px solid #dbdbdb;
  border-radius: 8px;
  background-size: cover;
`;

export const ProductName = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-left: 2px;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ProductPrice = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  margin-left: 2px;
  color: var(--main-color);
`;
