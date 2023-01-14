import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyled from './styles/Globalstyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <GlobalStyled />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
