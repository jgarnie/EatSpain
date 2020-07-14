import React, { useState, useEffect } from "react";
import { getOrders } from "./../Api/OrdersApi.js";
import OrderCard from "./OrderCard/OrderCard.jsx";

export default function App() {
    
    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(null);
    
    
    useEffect(() => {
        
    getOrders(setOrders, setIsLoading, status);
        
       
    }, []);

        console.log(orders)
    return (

        <>
            <OrderCard 
            
            
            
            />
        </>
    )
}
