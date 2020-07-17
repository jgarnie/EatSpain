import React, { useState, useEffect } from "react";
import { ProductsApi } from "./../../../api/ProductsApi.js";
import ProductCard from "./../../../components/ProductCard/ProductCard.jsx";
import "./ProductsSection.scss";

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
    <div className="products">
      {products && (
        <div className="products__wrap">
          {products.map((product, index) => {
            return (
              <ProductCard
                className="products__ProductCard"
                key={product.id}
                {...product}
              />
            );
          })}
        </div>
      )}

      <div className="products__ProductsSection" hidden={hidder}>
        <button className="products__btn" onClick={handleClick}>
          Load more...
        </button>
      </div>
    </div>
  );
}
