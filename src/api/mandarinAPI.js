export const loadProfileAPI = async (accountName) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/profile/${accountName}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      },
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const loadPostsAPI = async (accountName) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${accountName}/userpost/?limit=Number&skip=Number`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      },
    );
    const resJson = await res.json();
    // console.log(resJson);
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const loadProductsAPI = async (accountName) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/product/${accountName}/?limit=Number&skip=Number`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      },
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const loadFollowerListAPI = async (accountName) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/profile/${accountName}/follower/?limit=Number&skip=Number`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      },
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const loadFollowingListAPI = async (accountName) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/profile/${accountName}/following/?limit=Number&skip=Number`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      },
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const followAPI = async (accountName) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/profile/${accountName}/follow`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      },
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const unfollowAPI = async (accountName) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/profile/${accountName}/unfollow`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      },
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const likeAPI = async (postId, token) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postId}/heart`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const json = await res.json();
    if (!res.ok) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
    return json.post;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const unlikeAPI = async (postId, token) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postId}/unheart`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const json = await res.json();
    if (!res.ok) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
    return json.post;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const uploadPostAPI = async (token, textVal, filenameArr) => {
  try {
    const data = {
      post: {
        content: textVal,
        image: filenameArr.join(','),
      },
    };
    const res = await fetch('https://mandarin.api.weniv.co.kr/post', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const editPostAPI = async (postId, token, textVal, filenameArr) => {
  try {
    const data = {
      post: {
        content: textVal,
        image: filenameArr.join(','),
      },
    };
    const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${postId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();

    if (res.status === 403) {
      // eslint-disable-next-line no-alert
      alert(json.message);
    }

    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const deletePostAPI = async (postId) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
      },
    });
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const uploadImgAPI = async (imgFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imgFile);
    const res = await fetch(
      'https://mandarin.api.weniv.co.kr/image/uploadfile',
      {
        method: 'POST',
        body: formData,
      },
    );
    const json = await res.json();
    if (json.message) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
    return `https://mandarin.api.weniv.co.kr/${json.filename}`;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const uploadMultipleImgAPI = async (formData) => {
  try {
    const res = await fetch(
      'https://mandarin.api.weniv.co.kr/image/uploadfiles',
      {
        method: 'POST',
        body: formData,
      },
    );
    const json = await res.json();
    if (json.message) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
    const imgUrlArr = json.map(
      (item) => `https://mandarin.api.weniv.co.kr/${item.filename}`,
    );
    return imgUrlArr;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getPostDetailAPI = async (postId, token) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${postId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const json = await res.json();
    if (!res.ok) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
    return json.post;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getCommentListAPI = async (postId, token) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postId}/comments`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const json = await res.json();
    if (!res.ok) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
    return json.comments.reverse();
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const leaveCommentAPI = async (txtVal, postId, token) => {
  try {
    const data = {
      comment: {
        content: txtVal,
      },
    };
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postId}/comments`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    const json = await res.json();
    if (!res.ok) {
      // eslint-disable-next-line no-alert
      alert(`${json.message}`);
    }
  } catch (error) {
    console.log(error);
  }
};
export const deleteCommentAPI = async (postId, commentId, token) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postId}/comments/${commentId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.log(error);
  }
};
export const editProfileAPI = async (userName, userId, userIntro, userImg) => {
  try {
    const data = {
      user: {
        username: userName,
        accountname: userId,
        intro: userIntro,
        image: userImg,
      },
    };
    const res = await fetch(`https://mandarin.api.weniv.co.kr/user`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    // if (!res.ok) {
    //   // eslint-disable-next-line no-alert
    //   alert(`${json.message}`);
    // }
    return json.user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const addProductAPI = async (
  productName,
  productPrice,
  productURL,
  productImg,
) => {
  try {
    const data = {
      product: {
        itemName: productName,
        price: productPrice,
        link: productURL,
        itemImage: productImg,
      },
    };
    const res = await fetch('https://mandarin.api.weniv.co.kr/product', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const editProductAPI = async (
  productId,
  productName,
  productPrice,
  productURL,
  productImg,
) => {
  try {
    const data = {
      product: {
        itemName: productName,
        price: productPrice,
        link: productURL,
        itemImage: productImg,
      },
    };
    await fetch(`https://mandarin.api.weniv.co.kr/product/${productId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProductsAPI = async (productId) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/product/${productId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      },
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const getProductDetailAPI = async (productId) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/product/detail/${productId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-type': 'application/json',
        },
      },
    );
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const emailLoginAPI = async (email, password) => {
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
  const json = await res.json();
  return json;
};
export const emailDuplicateAPI = async (userEmail) => {
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
  return json;
};
export const accountnameValidAPI = async (userId) => {
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
export const getFollowersPostsAPI = async (token) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/post/feed/?limit=Number&skip=Number`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const json = await res.json();
    return json.posts;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const searchUserAPI = async (token, keyword) => {
  try {
    const res = await fetch(
      `https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${keyword}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const joinAPI = async (
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
