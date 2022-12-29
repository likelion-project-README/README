import styled from 'styled-components';

// 프로필 페이지 판매중인 상품 부분
export const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 208px;
  padding: 20px 0px 20px 0px;
  background-color: white;
  margin-bottom: 6px;
  padding-bottom: 14px;
`;

// overflow 스크롤 통해 확인 가능
export const ProductCaro = styled.div`
  display: flex;
  padding: 0px 16px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--sub2-text-color);
    border-radius: 6px;
  }

  gap: 10px;
`;
export const ProductSpan = styled.span`
  color: var(--main-text-color);
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
  padding: 0px 16px;
`;
