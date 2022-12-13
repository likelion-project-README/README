import styled from 'styled-components';

export const CommentCont = styled.div`
  width: 390px;
  height: 61px;
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  padding: 13px 16px 12px 16px;
`;

export const UserImg = styled.img`
  background-image: url('https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-size: contain;
`;

export const CommentInp = styled.input.attrs({
  placeholderTextColor: '#c4c4c4',
})`
  width: 260px;
  height: 18px;
  margin-left: 18px;
  font-size: 14px;
  color: var(--main-text-color);
  border: none;
  text-overflow: ellipsis;
`;

export const PostBtn = styled.button`
  width: 26px;
  height: 18px;
  margin-left: auto;
  font-size: 14px;
  color: ${(p) => p.color || '#c4c4c4'};
`;
