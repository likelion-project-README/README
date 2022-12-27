import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginSec = styled.section`
  width: 390px;
  height: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: auto 34px;
`;

export const LoginTit = styled.p`
  color: #000;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  margin: 55px 161px 40px 163px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const div = styled.div`
  margin: auto;
`;

export const StyledLink = styled(Link)`
  color: var(--sub-text-color);
  text-decoration: none;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin-top: 20px;
`;
