const deleteProductsAPI = async (productId) => {
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

export default deleteProductsAPI;
