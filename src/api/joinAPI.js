const joinAPI = async (
  username,
  email,
  password,
  accountname,
  intro,
  image,
) => {
  const res = await fetch('https://mandarin.api.weniv.co.kr/user', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username: 'username',
        email: 'email',
        password: 'password',
        accountname: 'accountname',
        intro: 'intro',
        image: '..src/assets/logo-profile.svg',
      },
    }),
  });
  const json = await res.json();
  console.log(json);
  const reqMsg = json.message;
  console.log(reqMsg === '이미 가입된 이메일 주소 입니다.', reqMsg);
  if (reqMsg === '이미 가입된 이메일 주소 입니다.') {
    return false;
  }
  return true;
};
export default joinAPI;
