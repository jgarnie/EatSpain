import React, { useState, useEffect } from "react";
import { CategoriesApi } from "../../api/CategoriesApi.js";
import Spinner from "../../components/Spinner/Spinner";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import "./CategoryPage.scss";

const CategoryPage = (props) => {
  const { categoryName } = props.match.params;
  const [products, setProducts] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  const [lastPage, setLastPage] = useState(null);
  const [hidder, setHider] = useState(false);
  const [page, setPage] = useState(1);
  const [safe, setSafe] = useState('');

  const loadProducts = (data) => {
    if (products === null) {
        setProducts(data.data);
        
        console.log("last", data.last_page);
        console.log("first", data.current_page);
        setLastPage(data.last_page);
    } else if(categoryName==safe){
        setProducts(products.concat(data.data));
    }
   
  };

  const handleClick = () => {
    setPage(page + 1);
    console.log("page", page);
  };

  useEffect(() => {
    setProducts(null);
    setSafe(categoryName)//helps to prevent data from concatenating, also refreshes the products
    setPage(1)
  }, [categoryName]);

  

  useEffect(() => {
    CategoriesApi.getCategory(loadProducts, setIsLoading, categoryName, page);
    
  }, [page,safe]);

  useEffect(() => {
    console.log(page, lastPage, hidder);
    if (page >= lastPage && lastPage !== null) {
      setHider(true);
    } else {
      setHider(false);
    }
  }, [page,lastPage]);

  return (
    <div className="categoryPage">
      <div className="categoryPage__container">
        <img
          className="categoryPage__img"
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

      <div className="products__ProductsSection" hidden={hidder}>
        <button className="products__btn" onClick={handleClick}>
          Load more...
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
