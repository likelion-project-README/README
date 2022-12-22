const loginAPI = async (email, password) => {
  const res = await fetch('https://mandarin.api.weniv.co.kr/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email,
        password,
      },
    }),
  });
  const json = res.json();
  console.log(json);
  return json;
};
export default loginAPI;
