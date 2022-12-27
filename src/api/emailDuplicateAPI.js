const emailDuplicateAPI = async (userEmail) => {
  const res = await fetch(`https://mandarin.api.weniv.co.kr/user/emailvalid`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: userEmail,
      },
    }),
  });
  const json = await res.json();
  console.log(json);
  return json;
};

export default emailDuplicateAPI;
