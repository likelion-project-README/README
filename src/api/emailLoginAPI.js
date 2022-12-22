const loginAPI = async (email, password) => {
  try {
    const loginData = {
      user: {
        email: 'email',
        password: 'password',
      },
    };
    console.log(loginData);
    const res = await fetch('https://mandarin.api.weniv.co.kr/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    // response 받은것 json에 넣고
    const json = await res.json();
    console.log(json);
    // 로그인 성공
    if (json.status !== 422) {
      localStorage.setItem('accountname', json.user.accountname);
      localStorage.setItem('token', json.user.token);
      localStorage.setItem('profileImg', json.user.image);
      // 로그인 실패
    } else {
      // loginError();
    }
    return json;
    // api 연결되어있지 않을 때
  } catch (error) {
    console.log(error);
    return null;
  }
  // .then((res) => res.json())
  // .then((result) => {
  // const user = data.user;
  // if (!user) {
  // throw new Error('로그인에 실패했습니다');
  // }
  //   context({
  //     type: 'LOGIN',
  //     payload: user,
  //   });
  //   localStorage.setItem('name', user.accountname);
  //   localStorage.setItem('token', user.token);

  //   setError(null);
  //   setIsPending(false);
  // })
};
