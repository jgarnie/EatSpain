import React, { useState, useEffect } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { ProductsApi } from "../../api/ProductsApi";
import Spinner from "../../components/Spinner/Spinner";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductDetailPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductDetailPage = (props) => {
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

  return !product ? (
    <Spinner />
  ) : (
    <div className="productDetail">
      <Link
        to={`/category/${product.category.name}`}
        className="productDetail__btn"
      >
        <FontAwesomeIcon
          className="productDetail__arrow"
          icon={faAngleDoubleLeft}
        />
        Back to{" "}
        <b className="productDetail__categoryName">{product.category.name}</b>
      </Link>

      <ProductDetail product={product} />

      <h1 className="productDetail__text">Check also</h1>
      <ProductSlider>
        {sliderProducts.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </ProductSlider>
    </div>
  );
};
export default ProductDetailPage;
