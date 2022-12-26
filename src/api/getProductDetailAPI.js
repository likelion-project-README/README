const getProductDetailAPI = async (productId) => {
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

export default getProductDetailAPI;
