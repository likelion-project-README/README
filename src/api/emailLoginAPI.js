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
    return null;
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
