import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { isLogin } from './atoms/LoginData';
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
import PrivateRoutes from './routes/privateRoutes';
import PrivateRoutesRev from './routes/privateRoutesRev';

const App = () => {
  const isLoginState = useRecoilValue(isLogin);
  console.log(isLoginState);
  return (
    <Routes>
      <Route path='/' element={<SplashPage />} />
      <Route element={<PrivateRoutes authorization={isLoginState} />}>
        {/* <Route path='/login/*'> */}
        {/* <Route path='/snsLogin' element={<SnsLogin />} /> */}
        <Route path='/emailLogin' element={<EmailLogin />} />
        {/* </Route> */}
        <Route path='/join/*'>
          <Route index element={<JoinPage />} />
          <Route path='profileSetting' element={<ProfileSetting />} />
        </Route>
      </Route>
      <Route element={<PrivateRoutesRev authorization={isLoginState} />}>
        <Route path='/' element={<SnsLogin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/profile/*'>
          <Route path=':id' element={<Profile />} />
          <Route path=':id/editProfile' element={<ProfileEdit />} />
          <Route path=':id/followings' element={<FollowingList />} />
          <Route path=':id/followers' element={<FollowerList />} />
          <Route path=':id/addProduct' element={<AddProduct />} />
          <Route path=':id/editProduct/:productId' element={<ProductEdit />} />
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route path='/post/*'>
          <Route path='upload' element={<PostUpload />} />
          <Route path=':id' element={<PostDetail />} />
          <Route path=':id/editPost' element={<PostEdit />} />
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route path='/chat' element={<ChatList />} />
        <Route path='/chat/:id' element={<ChatRoom />} />
        <Route path='/*' element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default App;
