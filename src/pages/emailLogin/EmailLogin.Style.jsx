import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginTit = styled.p`
  color: var(--main-text-color);
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  align-items: center;
  margin: 80px auto 40px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrap = styled.div`
  margin: 24px 34px 30px;
`;

export const StyledLink = styled(Link)`
  color: var(--sub-text-color);
  text-decoration: none;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
`;
