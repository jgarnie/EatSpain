import React, { useState, useEffect } from "react";
import { ProductsApi } from "./../../../api/ProductsApi.js";
import ProductCard from "./../../../components/ProductCard/ProductCard.jsx";
import "./ProductsSection.scss";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function ProductsSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [hidder, setHider] = useState(false);
  const [lastPage, setLastPage] = useState(null);

  const loadProducts = (data) => {
    if (products == null) {
      setProducts(data.data);
      setLastPage(data.last_page);
    } else {
      setProducts(products.concat(data.data));
    }
  };

  useEffect(() => {
    setIsLoading(true);

    ProductsApi.getAllProducts(loadProducts, setIsLoading, page);
  }, [page]);

  const handleClick = () => {
    if (page === lastPage - 1) {
      setPage(page + 1);
      setHider(true);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <>
      {products ? (
        <div className="HomePage__products__wrapper">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="HomePage__products__wrapper--ProductCard"
              >
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  category_id={product.category_id}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Spinner />
      )}
      <div className="ProductsSection__wrapper" hidden={hidder}>
        <FontAwesomeIcon
          className="ProductsSection__wrapper__faIcon"
          onClick={handleClick}
          icon={faChevronDown}
        />
      </div>
    </>
  );
}
