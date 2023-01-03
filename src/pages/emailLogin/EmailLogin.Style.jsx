import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const LoginSec = styled.section`
//   width: 390px;
//   height: 820px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: auto 34px;
// `;

export const LoginTit = styled.p`
  color: var(--main-text-color);
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  /* line-height: 29px; */
  align-items: center;
  margin: 80px auto 40px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrap = styled.div`
  margin: 40px auto;
`;

export const StyledLink = styled(Link)`
  color: var(--sub-text-color);
  text-decoration: none;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin-top: 20px;
`;
