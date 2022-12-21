const accountnameValidAPI = async (userId) => {
  try {
    const data = {
      user: {
        accountname: userId,
      },
    };
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/user/accountnamevalid`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default accountnameValidAPI;
