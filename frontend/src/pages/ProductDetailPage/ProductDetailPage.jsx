import React, { useState, useEffect } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { ProductsApi } from "../../api/ProductsApi";
import Spinner from "../../components/Spinner/Spinner";

const ProductDetailPage = (props) => {

  // console.log(props)

  const productId = props.match.params.productId


    const [product, setProduct] = useState(null);
    const [isProductLoading, setIsProductLoading] = useState(false);
  
    useEffect(() => {
      ProductsApi.getProduct(productId, setProduct, setIsProductLoading);
    }, []);
  
  
  return (
    !product? <Spinner/> :
    <ProductDetail product={product}/>
  );

}
export default ProductDetailPage;