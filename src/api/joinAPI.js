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
  const json = res.json();
  console.log(json);
  return json;
};
export default joinAPI;
