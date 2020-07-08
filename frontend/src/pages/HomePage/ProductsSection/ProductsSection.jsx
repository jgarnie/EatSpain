import React, { useState, useEffect } from "react";
import { ProductsApi } from "./../../../api/ProductsApi.js";
import ProductCard from "./../../../components/ProductCard/ProductCard.jsx";
import "./ProductsSection.scss";
import { linksUrl } from "./../../../env.js";

export default function ProductsSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        setIsLoading(true);
        
        ProductsApi.getAllProducts(setProducts, setIsLoading);
     }, []);
//console.log('products',products)



    return (
             <>
                <div className="HomePage__products__wrapper">
                        {products.map((product,index)=>{
                            return (
                                    <>
                                        <div className="HomePage__products__wrapper--ProductCard">
                                            <a href={`${ linksUrl }/products/${ product.id }`}>
                                                <ProductCard 
                                                key={index}
                                                id={product.id}
                                                name={product.name}
                                                description={product.description}
                                                image={product.image}
                                                categlry_id={product.category_id}
                                                />
                                            </a>
                                        </div>
                                    </>
                            )
                        })}
                </div>
            </>
    )
}
