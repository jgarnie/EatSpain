import React, { useState, useEffect } from "react";
import { ProductsApi } from "./../../api/ProductsApi.js";
import ProductCard from "./../../components/ProductCard/ProductCard.jsx";

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
           {products.map((product,index)=>{
             return <ProductCard 
             key={product.id}
             name={product.name}
             description={product.description}
             image={product.image}
             price={product.price}
             />
           })}
           
        </>
    )
};

export default SearchPage;
