import React, { useState } from "react";
import "./DeliveryAddress.scss";

const DeliveryAddress = () => {
  return (

    <form className="form">

      <h2 className="form__h">Delivery address</h2>

      <h3 className="form__headline">Billing information:</h3>
      <p className="form__input__name">First Name:</p>
      <input className="form__input" type="text" name="firstName" required />
      <p className="form__input__name">Last Name:</p>
      <input className="form__input" type="text" name="lastName" required />
      <p className="form__input__name">Email:</p>
      <input className="form__input" type="email" name="email" required />
      <p className="form__input__name">Address:</p>
      <input className="form__input" type="text" name="address" required />
      <p className="form__input__name">ZIP:</p>
      <input className="form__input" type="text" name="ZIP" required />
      <p className="form__input__name">City:</p>
      <input className="form__input" type="text" name="city" required />
      
      <div className="form__input__check">
        <label>
          <input type="checkbox" />
          I want to receive information about discounts and special offers</label>
          <br/>
        <label>
          <input type="checkbox" required/>
          I agree that I have read the terms and conditions
        </label>
      </div>

      <input className="form__submit" type="submit" value="Checkout to proceed"/>

  </form>
  );
};

export default DeliveryAddress;
