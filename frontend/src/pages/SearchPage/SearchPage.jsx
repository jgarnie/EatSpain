import React, { useState, useEffect } from "react";
import { ProductsApi } from "./../../api/ProductsApi.js";
import ProductCard from "./../../components/ProductCard/ProductCard.jsx";
import "./SearchPage.scss";


const SearchPage = ({searchValue, ...restProps}) => {

  const {query} = restProps.match.params
  //const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
 
  //console.log(restProps, "PROSPO");

    //  useEffect(() => {
    //   setIsLoading(true);
    //    ProductsApi.getAllProducts(setProducts, setIsLoading);
    //  }, []);


    useEffect(() => {
       setIsLoading(true);
       //setSearchResults(searchValue)
       ProductsApi.getSearchProducts(query,setSearchResults, setIsLoading);
    }, [query]);

 const results = searchResults;
console.log('results',results)
    return (
        <>
        
        <h3>We have found <span className="SeearchPage__poducts__wrapper--total">{results.length}</span> products</h3> 
          <div className="SeearchPage__poducts__wrapper">
            {results.map((product, index)=>{

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
