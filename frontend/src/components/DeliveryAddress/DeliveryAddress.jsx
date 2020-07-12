import React, { useReducer, useEffect, useContext } from "react";
import "./DeliveryAddress.scss";
import { CartContext } from "../../providers/CartProvider";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  zip: "",
  city: "",
  offers: true,
  terms: false,
};

function reducer(state, { action, value, field = null }) {
  switch (action) {
    case "change":
      return {
        ...state,
        [field]: value,
      };
    case "replace":
      return {
        ...state,
        ...value,
      };
    default:
      throw new Error("Invalid action for reducer", action);
  }
}

const DeliveryAddress = () => {
  const { deliveryDetails } = useContext(CartContext);

  useEffect(() => {
    if (Object.keys(deliveryDetails).length > 0) {
      dispatch({
        action: "replace",
        value: {
          firstName: deliveryDetails.first_name,
          lastName: deliveryDetails.last_name,
          email: deliveryDetails.email,
          address: deliveryDetails.address,
          zip: deliveryDetails.zip,
          city: deliveryDetails.city,
        },
      });
    }
  }, [deliveryDetails]);

  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    dispatch({ action: "change", value, field: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__headline">Billing information</h3>
      <label htmlFor="firstName" className="form__input__name">
        First Name:
      </label>
      <input
        className="form__input"
        value={state.firstName}
        onChange={handleChange}
        type="text"
        name="firstName"
        required
      />
      <label htmlFor="lastName" className="form__input__name">
        Last Name:
      </label>
      <input
        className="form__input"
        value={state.lastName}
        onChange={handleChange}
        type="text"
        name="lastName"
        required
      />
      <label htmlFor="email" className="form__input__name">
        Email:
      </label>
      <input
        className="form__input"
        value={state.email}
        onChange={handleChange}
        type="email"
        name="email"
        required
      />
      <label htmlFor="address" className="form__input__name">
        Address:
      </label>
      <input
        className="form__input"
        value={state.address}
        onChange={handleChange}
        type="text"
        name="address"
        required
      />
      <label htmlFor="city" className="form__input__name">
        City:
      </label>
      <input
        className="form__input"
        value={state.city}
        onChange={handleChange}
        type="text"
        name="city"
        required
      />
      <label htmlFor="zip" className="form__input__name">
        ZIP:
      </label>
      <input
        className="form__input"
        value={state.zip}
        onChange={handleChange}
        type="text"
        name="zip"
        required
      />

      <div className="form__input__check">
        <label>
          <input
            type="checkbox"
            name="offers"
            checked={state.offers}
            onChange={handleChange}
          />
          I want to receive information about discounts and special offers
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={state.terms}
            onChange={handleChange}
            required
          />
          I agree that I have read the terms and conditions
        </label>
      </div>

      <input
        className="form__submit"
        type="submit"
        value="Checkout to proceed"
      />
    </form>
  );
};

export default DeliveryAddress;
