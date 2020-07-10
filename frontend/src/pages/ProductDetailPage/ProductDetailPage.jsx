import React, { useState, useEffect } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { ProductsApi } from "../../api/ProductsApi";
import Spinner from "../../components/Spinner/Spinner";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoriesApi } from "../../api/CategoriesApi";
import "./ProductDetailPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

const ProductDetailPage = (props) => {
  // console.log(props)

  const productId = props.match.params.productId;

  const [product, setProduct] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [sliderProducts, setSliderProducts] = useState([]);
  const [isSliderLoading, setIsSliderLoading] = useState(false);

  useEffect(() => {
    setIsProductLoading(true);
    ProductsApi.getProduct(productId, setProduct, setIsProductLoading);
  }, [productId]);

  useEffect(() => {
    setIsSliderLoading(true);
    ProductsApi.getNewProducts(setSliderProducts, setIsSliderLoading);
  }, []);

  console.log(product)
  return !product ? (
    <Spinner />
  ) : (
    <div className="productDetail">
      <button className="productDetail__btn"> <FontAwesomeIcon className="productDetail__arrow" icon={faAngleDoubleLeft}/>go back to Category</button>

      <ProductDetail product={product} />

      <h1 className="productDetail__text">similar</h1>
      <ProductSlider>
        {sliderProducts.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </ProductSlider>

    </div>
  );
};
export default ProductDetailPage;
