import React, { useState, useEffect, useContext } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentPage.scss";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../providers/CartProvider";
import CartHeading from "../../components/CartHeading/CartHeading";
import CartFooter from "../../components/CartFooter/CartFooter";

const PaymentPage = ({ thankerHandler }) => {
  const { cart, isCartLoading, cartTotal, updateCheckoutData } = useContext(
    CartContext
  );

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
    if (status) {
      updateCheckoutData({ paymentMethod: "card", orderStatus: "Ordered" });
    }
  }, [status]);

  useEffect(() => {
    if (verification.length === 8) {
      setThanks(true);
    }
  }, [verification]);

  useEffect(() => {
    thankerHandler(thanks);
  }, [thanks]);

  return (
    <>
      <div>
        <h3 className="cardContainer__header">Order Summary</h3>
        <CartHeading />
        {cart.map((item) => (
          <CartItem compact key={item.id} item={item} />
        ))}
        <CartFooter />
      </div>
      <h3 className="cardContainer__headline">Payment Information</h3>

      <div className="cardContainer">
        <form className="cardContainer__form" onSubmit={verifier}>
          <label for="number" className="cardContainer__name">
            Card Number:
          </label>
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

          <label for="name" className="cardContainer__name">
            Name:
          </label>

          <input
            className="cardContainer__input"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <div className="cardContainer__datesBox">
            <div className="cardContainer__date">
              <label for="expiry" className="cardContainer__name">
                MM/DD Expiration:
              </label>

              <input
                className="cardContainer__inputDate"
                type="text"
                name="expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value.slice(0, 4))}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>

            <div className="cardContainer__date">
              <label for="cvc" className="cardContainer__name">
                CVC:
              </label>

              <input
                className="cardContainer__inputDate"
                type="number"
                name="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.slice(0, 3))}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
          </div>

          <div className="cardContainer__btnContainer">
            <button className="cardContainer__btn">Complete Order</button>
          </div>
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
