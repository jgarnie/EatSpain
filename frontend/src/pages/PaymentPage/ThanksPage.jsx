import React from 'react'
import { Link } from 'react-router-dom'
import "./thankspage.scss";

export default function ThanksPage() {
    return (
   
        <div className="thanks__wrapper">
            <h1>Thank you,</h1>
            <h2>Purchase number "insert here number"</h2>

            <h2>With your purchase you are helping us fight global warming</h2>

            <h3>To find more about our principles and values you can check  
                <p><Link to="/about">
                    About us
                </Link> </p>
            </h3>
            <h3>
            To check more articles
            <p>  <Link to="/">
            Eat Spain
            </Link> </p>
        
            </h3>
        </div>
     
    )
}
