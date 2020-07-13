import React, { useState, useEffect } from "react";
import { CategoriesApi } from "../../api/CategoriesApi.js";
import Spinner from "../../components/Spinner/Spinner";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
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
    
            <div className="categoryPage">
          <div className="categoryPage__container">
            <img className="categoryPage__img"
              src={require(`../../img/categories/${categoryName}.jpg`)}
              alt=""
            />
                      <h1 className="categoryPage__name">{categoryName}</h1>
          </div>

      {products ? (

          <div className="categoryPage__products">
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
      ) : (
        <Spinner />
      )}

      <div className="products__ProductsSection" hidden={hidder}><button className="products__btn" onClick={handleClick}>Load more...</button> 
                </div> 
                </div>

  );
};

export default CategoryPage;
