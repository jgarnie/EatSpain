import React, { useState, useEffect } from "react";
import { ProductsApi } from "./../../api/ProductsApi.js";
import ProductCard from "./../../components/ProductCard/ProductCard.jsx";
import "./SearchPage.scss";
import Spinner from "../../components/Spinner/Spinner.jsx";

const SearchPage = ({searchValue, ...restProps}) => {

  const {query} = restProps.match.params  
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        setIsLoading(true);
    
        ProductsApi.getSearchProducts(query,setSearchResults, setIsLoading);
       
    }, [query]);


 const results = searchResults;

    return (
        <>
          
          {searchResults.length<= 0 ?  <Spinner/> :

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
            }        
        </>
        )
};

export default SearchPage;
