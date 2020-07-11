import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentPage.scss";
import Spinner from "../../components/Spinner/Spinner";

export default function PaymentPage() {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const [status, setStatus] = useState(false);
    const [alert, setAlert] = useState(true);
    const [spinner, setSpinner] = useState(true);
  
    

const verifier=(e)=>{
    e.preventDefault();
   
    if(number.length>=16 && name!=='' && expiry!=='' && cvc.length>=3){
        setStatus(true)
        console.log('alert',status)
       
    }else{
        setAlert(false)
        console.log('alert',alert)
    }

}

const handleAlert=()=>{
    setAlert(true)
}

useEffect(() => {
     
    console.log('cc details', number,name,expiry,cvc,expiry)

    setTimeout(function() {
        
    }, 1000);

}, [status])


    return (<>
        <div className="cardContainer">
            <Cards 
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
            
            />
            <form onSubmit={verifier}>

                <input 
                type="tel" 
                name="number" 
                placeholder="Card Number" 
                value={number}
                onChange={e=>setNumber(e.target.value)}
                onFocus={e=> setFocus(e.target.name)}
                />
                <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={name}
                onChange={e=>setName(e.target.value)}
                onFocus={e=> setFocus(e.target.name)}
                />
                <input 
                type="text" 
                name="expiry" 
                placeholder="MM/DD Expiration" 
                value={expiry}
                onChange={e=>setExpiry(e.target.value)}
                onFocus={e=> setFocus(e.target.name)}
                />
                <input 
                type="tel" 
                name="cvc" 
                placeholder="CVC" 
                value={cvc}
                onChange={e=>setCvc(e.target.value)}
                onFocus={e=> setFocus(e.target.name)}
                />
                
                    <button>Complete Order</button>
                
            </form>
            <div hidden={alert} className="cardContainer__alert">

                <p> "please, verify the paymetn information is correct and try again"</p>
                   
                <button onClick={handleAlert}>Try Again</button>

            </div>
            <div hidden={spinner}>
                <Spinner />
            </div>
        </div>
        
    </>)
}
