import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import logoProfile from '../assets/logo-profile.svg';

// 로컬스토리지 저장
const { persistAtom } = recoilPersist();

export const usernameData = atom({
  key: 'username',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const accountnameData = atom({
  key: 'accountname',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const emailData = atom({
  key: 'email',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const passwordData = atom({
  key: 'password',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const introData = atom({
  key: 'intro',
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
