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
        username,
        email,
        password,
        accountname,
        intro,
        image,
      },
    }),
  });
  const json = await res.json();
  return json;
};
export default joinAPI;
