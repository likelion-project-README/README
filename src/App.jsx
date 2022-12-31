import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/home/Home';
import SnsLogin from './pages/snsLogin/SnsLogin';
import EmailLogin from './pages/emailLogin/EmailLogin';
import Page404 from './pages/page404/Page404';
import JoinPage from './pages/join/Join';
import Search from './pages/search/Search';
import Profile from './pages/profile/Profile';
import ChatList from './pages/chatList/ChatList';
import ChatRoom from './pages/chatRoom/ChatRoom';
import ProfileSetting from './pages/profileSetting/ProfileSetting';
import PostUpload from './pages/postUpload/PostUpload';
import PostDetail from './pages/postDetail/PostDetail';
import PostEdit from './pages/postEdit/PostEdit';
import ProductEdit from './pages/productEdit/ProductEdit';
import AddProduct from './pages/addProduct/AddProduct';
import FollowerList from './pages/followerList/FollowerList';
import FollowingList from './pages/followingList/FollowingList';
import ProfileEdit from './pages/profileEdit/ProfileEdit';
import SplashPage from './pages/splash/Splash';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {/* 메인페이지  */}
          <Route path='/' element={<SplashPage />} />
          {/* 로그인 */}
          <Route path='/login/*' element={<Outlet />}>
            <Route path='' element={<SnsLogin />} />
            <Route path='emailLogin' element={<EmailLogin />} />
          </Route>
          {/* 회원가입 */}
          <Route path='/signUp/*' element={<Outlet />}>
            <Route path='' element={<JoinPage />} />
            <Route path='profileSetting' element={<ProfileSetting />} />
          </Route>
          {/* 검색 */}
          <Route path='/search' element={<Search />} />
          {/* 프로필페이지  */}
          <Route path='/profile/*' element={<Outlet />}>
            <Route path=':id' element={<Profile />} />
            <Route path=':id/editProfile' element={<ProfileEdit />} />
            <Route path=':id/followings' element={<FollowingList />} />
            <Route path=':id/followers' element={<FollowerList />} />
            <Route path=':id/addProduct' element={<AddProduct />} />
            <Route
              path=':id/editProduct/:productId'
              element={<ProductEdit />}
            />
            <Route path='*' element={<Page404 />} />
          </Route>
          {/* 포스트페이지 */}
          <Route path='/post/*' element={<Outlet />}>
            {/*  */}
            <Route path='upload' element={<PostUpload />} />
            {/*  */}
            <Route path=':id' element={<PostDetail />} />
            <Route path=':id/editPost' element={<PostEdit />} />
            {/*  */}
            <Route path='*' element={<Page404 />} />
          </Route>

          {/* 채팅페이지 */}
          <Route path='/chat' element={<ChatList />} />

          {/* id = 채팅 상대방 아이디 */}
          <Route path='/chat/:id' element={<ChatRoom />} />

          {/* 404페이지 */}
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
