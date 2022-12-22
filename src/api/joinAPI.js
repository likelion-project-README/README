const goJoinAPI = async (
  username,
  email,
  password,
  accountname,
  intro,
  image,
) => {
  try {
    const joinData = {
      user: {
        username: 'username',
        email: 'email',
        password: 'password',
        accountname: 'accountname',
        intro: 'intro',
        image: '..src/assets/logo-profile.svg',
      },
    };
    const res = await fetch('https://mandarin.api.weniv.co.kr/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(joinData),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default goJoinAPI;
