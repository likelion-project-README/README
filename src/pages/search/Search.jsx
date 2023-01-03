import { useEffect, useState } from 'react';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import { searchUserAPI } from '../../api/mandarinAPI';
import * as S from './Search.Style';

const Search = () => {
  const token = localStorage.getItem('token');

  const [searchVal, setSearchVal] = useState('');
  const [resultList, setResultList] = useState([]);

  const searchUser = async () => {
    const resultListData = await searchUserAPI(token, searchVal);
    setResultList(resultListData.splice(0, 10));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchVal !== '' && !searchVal.startsWith(' ')) {
        searchUser();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchVal]);

  return (
    <S.Search>
      <S.SearchTit>사용자 검색 페이지</S.SearchTit>
      <TopBanner type='top-search-nav' setSearchVal={setSearchVal} />
      {searchVal && (
        <S.SearchedUserUl>
          {resultList?.length > 0 &&
            resultList.map((item) => (
              <li key={item.id}>
                {(item.username.includes(searchVal) ||
                  item.accountname.includes(searchVal)) && (
                  <S.UserBannerLink to={`/profile/${item.accountname}`}>
                    <S.SearchedUser>
                      <S.UserImg src={item.image} />
                      <S.UserInfo>
                        {item.username.includes(searchVal) ? (
                          <S.UserName>
                            {item.username.split(searchVal)[0]}
                            <S.MatchedSpan>{searchVal}</S.MatchedSpan>
                            {item.username.split(searchVal)[1]}
                          </S.UserName>
                        ) : (
                          <S.UserName>{item.username}</S.UserName>
                        )}
                        {item.accountname.includes(searchVal) ? (
                          <S.AccountName>
                            @{item.accountname.split(searchVal)[0]}
                            <S.MatchedSpan>{searchVal}</S.MatchedSpan>
                            {item.accountname.split(searchVal)[1]}
                          </S.AccountName>
                        ) : (
                          <S.AccountName>@ {item.accountname}</S.AccountName>
                        )}
                      </S.UserInfo>
                    </S.SearchedUser>
                  </S.UserBannerLink>
                )}
              </li>
            ))}
        </S.SearchedUserUl>
      )}
      <S.TabMenuCont>
        <TabMenu />
      </S.TabMenuCont>
    </S.Search>
  );
};

export default Search;
