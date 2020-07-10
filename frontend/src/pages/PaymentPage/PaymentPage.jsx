import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentPage.scss";

export default function PaymentPage() {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');

const handleSubmit=(e)=>{
    
        e.preventDefault();
   
    console.log('cc details', number,name,expiry,cvc,expiry)
       
        fetch('/api/mission/attach', {
            method: 'POST',
            body: JSON.stringify({
                person_id: this.props.person.id,
                mission_id:this.state.newMission
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.token,
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({missions:data});
            }
        );
    
  
    
    
}

    return (
        <div className="cardContainer">
            <Cards 
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
            
            />
            <form action="">

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
                <div className="formbtn">
                    <button onClick={handleSubmit}>Complete Order</button>
                </div>
            </form>
        </div>
    )
}
