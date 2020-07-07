import React, { useState, useEffect } from "react";
import { ProductsApi } from "./../../api/ProductsApi.js";
import ProductCard from "./../../components/ProductCard/ProductCard.jsx";
import "./SearchPage.scss";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        ProductsApi.getAllProducts(setProducts, setIsLoading);
      }, []);
console.log(products);
    return (
        <>
        
        <h3>We have found <span className="SeearchPage__poducts__wrapper--total">{products.length}</span> products</h3>
          <div className="SeearchPage__poducts__wrapper">
            
            {products.map((product,index)=>{
              return (
              
                <ProductCard 
                  key={index}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              
              ) 
            })}
            
            </div> 
           
           </>
          )
};

export default SearchPage;
