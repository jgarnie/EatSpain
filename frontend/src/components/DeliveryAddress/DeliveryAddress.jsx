import React, { useState } from "react";

const DeliveryAddress = () => {
  return (
    <form>
      <input type="text" name="firstName" placeholder="First name" />
      <input type="text" name="lastName" placeholder="Last name" />
      <input type="text" name="address" placeholder="Address" />
      <input
        type="text"
        name="additionalInfo"
        placeholder="Additional information"
      />
      <input type="text" name="ZIP" placeholder="ZIP" />
      <input type="text" name="city" placeholder="City" />
    </form>
  );
};

export default DeliveryAddress;
