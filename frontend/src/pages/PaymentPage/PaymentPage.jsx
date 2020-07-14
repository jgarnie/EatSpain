import React, { useState, useEffect, useContext } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentPage.scss";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../providers/CartProvider";

const PaymentPage = ({ thankerHandler }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [status, setStatus] = useState(false);
  const [alert, setAlert] = useState(true);
  const [spinner, setSpinner] = useState(true);
  const [verification, setVerification] = useState("");
  const [thanks, setThanks] = useState(false);

  const verifier = (e) => {
    e.preventDefault();

    if (
      number.length >= 16 &&
      name !== "" &&
      expiry !== "" &&
      cvc.length >= 3
    ) {
      setStatus(true);

      setSpinner(false);
      setInterval(print, 500);
    } else {
      setAlert(false);
    }
  };
  const print = () => {
    setVerification((verification) => verification + ".");
  };

  const handleAlert = () => {
    setAlert(true);
  };

  useEffect(() => {
    //signal to server will be sent
  }, [status]);
  useEffect(() => {
    if (verification.length === 8) {
      setThanks(true);
    }
  }, [verification]);

  useEffect(() => {
    thankerHandler(thanks);
  }, [thanks]);

  console.log("props", thankerHandler);

  const { cart, cartTotal, isCartLoading } = useContext(CartContext);

  return (
    <>
      <div>
        <h1>Order SUmmary</h1>
        {cart.map((item) => (
          <CartItem compact key={item.id} item={item} />
        ))}
      </div>
      <div className="cardContainer">
        <form className="cardContainer__form" onSubmit={verifier}>
          <label className="cardContainer__name">
            Card Number:
            <input
              className="cardContainer__input"
              type="number"
              name="number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value.slice(0, 16));
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </label>

          <label className="cardContainer__name">
            Name:
            <input
              className="cardContainer__input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </label>

          <label className="cardContainer__name">
            MM/DD Expiration:
            <input
              className="cardContainer__input"
              type="text"
              name="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </label>

          <label className="cardContainer__name">
            CVC:
            <input
              className="cardContainer__input"
              type="tel"
              name="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </label>

          <button className="cardContainer__btn">Complete Order</button>
        </form>

        <Cards
          className="cardContainer__card"
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <div hidden={alert} className="cardContainer__alert">
          <p>
            {" "}
            "please, verify the paymetn information is correct and try again"
          </p>

          <button onClick={handleAlert}>Try Again</button>
        </div>
        <div hidden={spinner} className="cardContainer__verify">
          <div className="cardContainer__verify__inner">
            <h4>We are processing you request, this may take few seconds</h4>
            <p>conecting with server </p>
            <div className="cardContainer__verify__inner__loading">
              {verification}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentPage;
