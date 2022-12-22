import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import TabMenu from '../../common/tabMenu/TabMenu';
import UserBanner from '../../common/userBanner/UserBanner';
import searchUserAPI from '../../api/searchUserAPI';
import * as S from './Search.Style';

const Search = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [searchVal, setSearchVal] = useState('');
  const [userList, setUserList] = useState();

  const searchUser = async () => {
    const userListData = await searchUserAPI(token, searchVal);
    setUserList(userListData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchVal !== '') {
        searchUser();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchVal]);

  const goToProfile = (accountname) => {
    navigate(`/profile/${accountname}`);
  };

  return (
    <S.Search>
      <S.SearchTit>사용자 검색 페이지</S.SearchTit>
      <TopBanner type='top-search-nav' setSearchVal={setSearchVal} />
      {searchVal && (
        <S.SearchedUserUl>
          {userList?.length > 0 &&
            userList?.map((item) => (
              <li
                role='presentation'
                key={item.id}
                onClick={() => {
                  goToProfile(item?.accountname);
                }}
              >
                <UserBanner state='btn-disabled' data={item} />
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
