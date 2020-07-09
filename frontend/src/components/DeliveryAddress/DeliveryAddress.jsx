import React, { useReducer } from "react";
import "./DeliveryAddress.scss";

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

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const DeliveryAddress = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    dispatch({ field: e.target.name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__headline">Billing information</h3>
      <p className="form__input__name">First Name:</p>
      <input
        className="form__input"
        value={state.firstName}
        onChange={handleChange}
        type="text"
        name="firstName"
        required
      />
      <p className="form__input__name">Last Name:</p>
      <input
        className="form__input"
        value={state.lastName}
        onChange={handleChange}
        type="text"
        name="lastName"
        required
      />
      <p className="form__input__name">Email:</p>
      <input
        className="form__input"
        value={state.email}
        onChange={handleChange}
        type="email"
        name="email"
        required
      />
      <p className="form__input__name">Address:</p>
      <input
        className="form__input"
        value={state.address}
        onChange={handleChange}
        type="text"
        name="address"
        required
      />
      <p className="form__input__name">ZIP:</p>
      <input
        className="form__input"
        value={state.zip}
        onChange={handleChange}
        type="text"
        name="zip"
        required
      />
      <p className="form__input__name">City:</p>
      <input
        className="form__input"
        value={state.city}
        onChange={handleChange}
        type="text"
        name="city"
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
