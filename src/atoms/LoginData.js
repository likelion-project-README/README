import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

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
  default: '..src/assets/logo-profile.svg',
  effects_UNSTABLE: [persistAtom],
});
