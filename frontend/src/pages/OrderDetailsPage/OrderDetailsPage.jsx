import React from "react";
import DeliveryAddress from "../../components/DeliveryAddress/DeliveryAddress";
import "./OrderDetailsPage.scss";

const OrderDetailsPage = () => {
  return (
    <div>
      <div>
      <h3 className="summary">Order Summary</h3>
      <DeliveryAddress />
      </div>

    </div>
  );
};

export default OrderDetailsPage;
