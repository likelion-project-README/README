import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import UserBanner from '../../common/userBanner/UserBanner';
import * as S from './Search.Style';

const Search = () => {
  return (
    <S.Search>
      <S.SearchTit>사용자 검색 페이지</S.SearchTit>
      <S.TopBannerCont>
        <TopBanner type='top-search-nav' />
      </S.TopBannerCont>
      <S.SearchedUserUl>
        <li>
          <UserBanner state='btn-disabled' />
        </li>
      </S.SearchedUserUl>
      <S.TabMenuCont>
        <TabMenu />
      </S.TabMenuCont>
    </S.Search>
  );
};

export default Search;
