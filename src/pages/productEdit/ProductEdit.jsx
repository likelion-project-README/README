import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopBanner from '../../common/topBanner/TopBanner';
import InputBox from '../../common/inputBox/InputBox';
import uploadImgAPI from '../../api/uploadImgAPI';
import getProductDetailAPI from '../../api/getProductDetailAPI';
import editProductAPI from '../../api/editProductAPI';
import * as S from './ProductEdit.Style';

const ProductEdit = () => {
  const navigate = useNavigate();
  // 프로필 페이지에서 파라미터로 받아서 사용하기
  const productID = useParams().productId;
  const fileInputRef = useRef();

  const [btnActive, setBtnActive] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productURL, setProductURL] = useState('');
  const [productImg, setProductImg] = useState('');
  const [validPrice, setValidPrice] = useState(true);

  // 기존 상품 정보 불러오기
  useEffect(() => {
    const getProduct = async () => {
      try {
        const result = await getProductDetailAPI('63a45f9217ae666581efea86');
        setProductName(result.product.itemName);
        setProductImg(result.product.itemImage);
        setProductPrice(result.product.price);
        setProductURL(result.product.link);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  // 이미지 업로드
  const uploadImg = async (e) => {
    const imgFile = e.target.files[0];
    const imgUrl = await uploadImgAPI(imgFile);
    setProductImg(imgUrl);
    setBtnActive(true);
  };

  // 상품명 공백으로 시작 방지
  const handleProductName = (e) => {
    const NameVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(NameVal)) {
      e.preventDefault();
      alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else {
      setProductName(NameVal);
      setBtnActive(true);
    }
  };

  // 상품가격 원단위로 변환
  const handleProductPrice = (e) => {
    const priceVal = Number(e.target.value.replaceAll(',', ''));
    const formatValue = priceVal.toLocaleString('ko-KR');
    if (formatValue === 'NaN') {
      e.preventDefault();
    } else {
      setProductPrice(formatValue);
    }
  };

  // 상품가격 1원 이상만 입력 가능
  const handleProductPriceValid = (e) => {
    if (productPrice === '0') {
      setValidPrice(false);
      setBtnActive(false);
    } else {
      setValidPrice(true);
      setBtnActive(true);
    }
  };

  // 판매링크 공백으로 시작 방지
  const handleProductURL = (e) => {
    const URLVal = e.target.value;
    const regex = /^[\s]+/;
    if (regex.test(URLVal)) {
      e.preventDefault();
      alert('공백으로 시작할 수 없습니다.'); // eslint-disable-line no-alert
    } else {
      setProductURL(URLVal);
      setBtnActive(true);
    }
  };

  // 상품 수정 데이터 전송
  const editProduct = async (e) => {
    e.preventDefault();
    if (btnActive === true) {
      await editProductAPI(
        '63a45f9217ae666581efea86',
        productName,
        productPrice,
        productURL,
        productImg,
      );
      alert('상품 수정이 완료되었습니다.'); // eslint-disable-line no-alert
      // accountname 받아서 유저 프로필 페이지로 이동
      // navigate('/profile/:id');
    }
  };

  return (
    <S.ProductEditWrap>
      <S.ProductEditTit>상품 수정 페이지</S.ProductEditTit>
      <form onSubmit={editProduct}>
        <TopBanner type='top-upload-nav' tit='저장' isActive={btnActive} />
        <S.ImgWrap>
          <S.ImgUploadTit>이미지 등록</S.ImgUploadTit>
          <S.ImgBox src={productImg} alt='유저 상품 이미지' />
          <S.ImgUploadLab htmlFor='productImg' />
          <S.ImgUploadInp
            type='file'
            id='productImg'
            accept='image/*'
            ref={fileInputRef}
            onChange={uploadImg}
          />
        </S.ImgWrap>
        <InputBox
          label='상품명'
          id='productName'
          placeholder='2~15자 이내여야 합니다.'
          value={productName}
          min='2'
          max='15'
          onChange={handleProductName}
        />
        {validPrice ? (
          <InputBox
            label='가격'
            id='productPrice'
            placeholder='숫자만 입력 가능합니다.'
            value={productPrice}
            onChange={handleProductPrice}
            onBlur={handleProductPriceValid}
          />
        ) : (
          <InputBox
            label='가격'
            id='productPrice'
            placeholder='숫자만 입력 가능합니다.'
            value={productPrice}
            onChange={handleProductPrice}
            onBlur={handleProductPriceValid}
            bottomColor='red'
            message='가격은 1원 이상이어야 합니다.'
            display='yes'
          />
        )}
        <InputBox
          label='판매 링크'
          id='productURL'
          placeholder='URL을 입력해 주세요.'
          value={productURL}
          onChange={handleProductURL}
        />
      </form>
    </S.ProductEditWrap>
  );
};

export default ProductEdit;
