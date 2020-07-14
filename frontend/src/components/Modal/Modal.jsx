import React from "react";
import { useHistory } from "react-router-dom";
import "./Modal.scss";

const Modal = ({ show, children, handleCloseModal }) => {
  const history = useHistory();

  if (!show) {
    return null;
  }
  return (
    <div
      className="modal"
      onClick={(e) => {
        console.dir(e.target, "modal");
        if (e.target.className === "modal") {
          handleCloseModal();
        }
      }}
    >
      <div className="modal__content">
        <div className="modal__children">{children}</div>
        <div className="modal__actions">
          <button
            className="modal__btn modal__btn--primary"
            onClick={(e) => {
              history.push("/cart");
            }}
          >
            Go to cart
          </button>
          <button
            className="modal__btn"
            onClick={(e) => {
              handleCloseModal();
            }}
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
