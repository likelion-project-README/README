const editProductAPI = async (
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

export default editProductAPI;
