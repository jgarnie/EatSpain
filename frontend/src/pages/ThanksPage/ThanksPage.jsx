import React from 'react'
import { Link } from 'react-router-dom'
import "./ThanksPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";



export default function ThanksPage() {
    return (
   
        <div className="thanksWrapper">
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
            <div className="thanksWrapper__wrap">
                <div className="thanksWrapper__wrap__faIcon__truck">
                    <FontAwesomeIcon
                        
                        
                        icon={faTruck}
                    />  
                </div>
                <div className="thanksWrapper__wrap__faIcon__home">
                    <FontAwesomeIcon
                        
                        
                        icon={ faHome }
                    />  
                </div>
            </div>
        </div>
     
    )
}
