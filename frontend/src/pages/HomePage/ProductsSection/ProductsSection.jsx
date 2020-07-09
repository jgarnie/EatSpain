import React, { useState, useEffect } from "react";
import { ProductsApi } from "./../../../api/ProductsApi.js";
import ProductCard from "./../../../components/ProductCard/ProductCard.jsx";
import "./ProductsSection.scss";
import { Link } from "react-router-dom";


export default function ProductsSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState(null);
    const [offSet, setOffset] = useState(15);

  
    useEffect(() => {
        setIsLoading(true);
        
        ProductsApi.getAllProducts(setProducts, setIsLoading, offSet);
     }, []);
const handleClick =()=>{
    console.log(window.pageYOffset)
}


    return (<> 
                {products ?
                <div className="HomePage__products__wrapper">
               
                        {products.data.map((product,index)=>{
                            return (
                                    
                                        <div className="HomePage__products__wrapper--ProductCard">
                                           <Link to={`/products/${product.id}`}>
                                                <ProductCard 
                                                key={index}
                                                id={product.id}
                                                name={product.name}
                                                description={product.description}
                                                image={product.image}
                                                categlry_id={product.category_id}
                                                />
                                            </Link>
                                        </div>
                                   
                            )
                        })}
                   
                </div>: <h1>loadind</h1>}
               <button onClick={handleClick}>daasd</button> 
           </>
    )
}
