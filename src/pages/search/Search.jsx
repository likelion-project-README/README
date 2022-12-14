import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import * as S from './Search.Style';

const Search = () => {
  return (
    <S.Search>
      <S.SearchTit>사용자 검색 페이지</S.SearchTit>
      <S.TopBannerCont>
        <TopBanner type='top-search-nav' />
      </S.TopBannerCont>
      <S.SearchedUserUl>
        <S.SearchedUserLi>
          <S.UserProfileImg src='' alt='' />
          <div>
            <S.UserName>유저이름</S.UserName>
            <S.AccountName>계정명</S.AccountName>
          </div>
        </S.SearchedUserLi>
      </S.SearchedUserUl>
      <S.TabMenuCont>
        <TabMenu />
      </S.TabMenuCont>
    </S.Search>
  );
};

export default Search;
