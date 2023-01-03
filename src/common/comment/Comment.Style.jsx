import styled from 'styled-components';

export const CommentCont = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 0.5px solid var(--sub2-text-color);
  background-color: #fff;
  z-index: 30;
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 16px 12px 16px;
`;

export const UserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentLab = styled.label`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const CommentInp = styled.input`
  min-width: 260px;
  max-width: 660px;
  width: calc(100vw - 118px);
  font-size: 14px;
  color: var(--main-text-color);
  border: none;
  text-overflow: ellipsis;
  &::placeholder {
    color: #c4c4c4;
  }
  &:focus {
    outline: 2px solid var(--main-disabled-color);
    border-radius: 4px;
  }
`;

export const PostBtn = styled.button`
  width: 26px;
  height: 18px;
  font-size: 14px;
  color: ${(props) => (props.isBtnActive ? 'var(--main-color)' : '#c4c4c4')};
`;
