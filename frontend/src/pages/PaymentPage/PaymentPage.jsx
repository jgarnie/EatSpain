import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentPage.scss";
import Spinner from "../../components/Spinner/Spinner";

 const PaymentPage=({thankerHandler})=> {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const [status, setStatus] = useState(false);
    const [alert, setAlert] = useState(true);
    const [spinner, setSpinner] = useState(true);
    const [verification, setVerification] = useState("");
    const [thanks, setThanks] = useState(false);
  

const verifier=(e)=>{
    e.preventDefault();

    if(number.length>=16 && name!=='' && expiry!=='' && cvc.length>=3){
        setStatus(true)
        console.log('alert',status)
             setSpinner(false)
       setInterval(print,500);
        
       
    }else{
        setAlert(false)
        console.log('alert',alert)
    }

}
const print=()=>{

    setVerification(verification=> verification+".");

}

const handleAlert=()=>{
    setAlert(true)
}

useEffect(() => {
     
    console.log('cc details', number,name,expiry,cvc,expiry)
   

}, [status])
useEffect(() => {
     
    if(verification.length===8){
   
        setThanks(true);
    
    }
   
}, [verification])

useEffect(() => {
     
    thankerHandler(thanks);

}, [thanks])

console.log('props',thankerHandler)



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
            <div hidden={spinner} className="cardContainer__verify">
                <div className="cardContainer__verify__inner">
                <h4>We are processing you request, this may take few seconds</h4>
                <p>conecting with server <div className="cardContainer__verify__inner__loading">{verification}</div></p>
                   <div className="spinner"><Spinner /></div>
                        
                    
                </div>
            </div>
            
        </div>
        
    </>)
}
export default PaymentPage;