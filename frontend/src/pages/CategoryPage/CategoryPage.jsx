import React, { useState, useEffect } from "react";
import { CategoriesApi } from "../../api/CategoriesApi.js";
import Spinner from "../../components/Spinner/Spinner";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";
import "./CategoryPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CategoryPage = (props) => {
  const { categoryName } = props.match.params;
  const [products, setProducts] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [hidder, setHider] = useState(false);
  const [page, setPage] = useState(1);

  const loadProducts = (data) => {
    if (products === null) {
      setProducts(data.data);
      setLastPage(data.last_page);
    } else {
      setProducts(products.concat(data.data));
      console.log(products);
    }
    if (page >= lastPage - 1) {
      setHider(true);
    }
  };

  const handleClick = () => {
    if (page >= lastPage - 1) {
      setPage(page + 1);
      setHider(true);
    } else {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setProducts(null);
  }, [categoryName]);

  useEffect(() => {
    if (products == null) {
      CategoriesApi.getCategory(loadProducts, setIsLoading, categoryName);
    }
  }, [products]);

  return (
    <>
      {products ? (
        <div>
        <img src={require(`../../img/categories/${categoryName}.jpg`)} alt=""/>

        <h1>Category {categoryName}</h1>

        <div>
        </div>
        <div className="categorypage__products__wrapper">
        {products.map((product, index) => {
            return (
 
                <ProductCard className="products__ProductCard"
                  key={product.id}
                  {...product}
                />
              
            );
          })}
          
        </div>

        </div>
      ) : (
        <Spinner />
      )}
      <div className="categorypageSection__wrapper" hidden={hidder}>
        <FontAwesomeIcon
          className="ProductsSection__wrapper__faIcon"
          onClick={handleClick}
          icon={faChevronDown}
        />
      </div>
    </>
  );
};

export default CategoryPage;
