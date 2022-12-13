import React, { useState } from 'react';
import * as S from './TabMenu.Style';

const TabMenu = () => {
  // atom으로 분리할 것
  // const [position, setPosition] = useState([
  //   '-89.5px -117.5px',
  //   '-2.5px -88.5px',
  //   '-60.5px -117.5px',
  //   '-89.5px -88.5px',
  // ]);

  // 테스트용
  // const handleClick = (index, value) => {
  //   const copy = [...position];
  //   copy[index] = value;
  //   setPosition(copy);
  // }

  return (
    <S.TabMenuCont>
      <S.TabMenuUl>
        <S.TabMenuLi>
          {/* <S.IconImg position='-89.5px -117.5px' /> */}
          <S.IconImg backgroundPosition={position[0]} />
          <S.IconTit>홈</S.IconTit>
        </S.TabMenuLi>
        <S.TabMenuLi>
          {/* <S.IconImg position='-2.5px -88.5px' /> */}
          <S.IconImg backgroundPosition={position[1]} />
          <S.IconTit>채팅</S.IconTit>
        </S.TabMenuLi>
        <S.TabMenuLi>
          {/* <S.IconImg position='-60.5px -117.5px' /> */}
          <S.IconImg backgroundPosition={position[2]} />
          <S.IconTit>게시물 작성</S.IconTit>
        </S.TabMenuLi>
        <S.TabMenuLi>
          {/* <S.IconImg position='-89.5px -88.5px' /> */}
          <S.IconImg backgroundPosition={position[3]} />
          <S.IconTit>프로필</S.IconTit>
        </S.TabMenuLi>
      </S.TabMenuUl>
    </S.TabMenuCont>
  );
};

export default TabMenu;
