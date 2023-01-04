import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import logoProfile from '../assets/logo-profile.svg';

const { persistAtom } = recoilPersist();

export const accountnameData = atom({
  key: 'accountname',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const profileImageData = atom({
  key: 'image',
  default: logoProfile,
  effects_UNSTABLE: [persistAtom],
});

export const isLogin = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
