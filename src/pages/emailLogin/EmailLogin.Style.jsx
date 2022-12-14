import styled from 'styled-components';

export const LoginSec = styled.section`
  width: 390px;
  height: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const LoginTit = styled.p`
  color: #000;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  margin: 55px 161px 40px 163px;
`;

export const EmailLoginForm = styled.form`
  height: 112px;
  margin-bottom: 30px;
`;

export const Password = styled.label`
  width: 322px;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 34px 16px 34px;
`;

export const PasswordLab = styled.label`
  margin-left: 2px;
  font-weight: 500;
  font-size: 12px;
  color: var(--sub-text-color);
`;

export const PasswordInp = styled.input`
  font-size: 14px;
  line-height: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  text-overflow: ellipsis;
  color: #000;
  :focus {
    outline: none;
    border-bottom: 1px solid var(--main-color);
  }
`;

export const SignUpTxt = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin-top: 20px;
  color: var(--sub-text-color);
`;
