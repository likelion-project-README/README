const emailDuplicateAPI = async (email) => {
  email.preventDefault();
  const res = await fetch(`https://mandarin.api.weniv.co.kr/user/emailvalid`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email,
      },
    }),
  });
  const json = res.json();
  console.log(json);
  return json;
};

export default emailDuplicateAPI;
