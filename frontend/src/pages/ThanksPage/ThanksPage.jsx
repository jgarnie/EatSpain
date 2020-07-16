import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ThanksPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../providers/CartProvider";

export default function ThanksPage() {
  const { lastOrder } = useContext(CartContext);
  return (
    <div className="thanksPage">
      <h1>Thank you for your purchase!</h1>

      <h2 className="thanksPage__info">
        We recieved your order {lastOrder.orderNumber}
      </h2>
      <p className="thanksPage__info">
        We will keep you informed about our progress to email{" "}
        <strong>{lastOrder.email}</strong>
      </p>

      <h2 className="thanksPage__motto">
        With your order you are helping us fight global warming
      </h2>

      <h3>
        To find out more about our goals you can check{" "}
        <Link className="thanksPage__btn" to="/about">
          here
        </Link>{" "}
      </h3>

      <img
        className="thanksPage__img"
        src={require("../../img/green.jpg")}
        alt="forest"
      />

      {/* <div className="thanksPage__wrap">
        <div className="thanksPage__wrap__faIcon__truck">
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <div className="thanksPage__wrap__faIcon__home">
          <FontAwesomeIcon icon={faHome} />
        </div>
      </div> */}
    </div>
  );
}
