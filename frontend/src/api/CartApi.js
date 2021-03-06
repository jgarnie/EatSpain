import { baseUrl } from "../env.js";
import fetchData from "../utils/fetchData.js";

export class CartApi {
  static getToken = async (token, setData) => {
    const data = await fetchData(`${baseUrl}/api/carts?token=${token}`);
    if (data.token) {
      setData(data.token);
    }
  };

  static getCartItems = async (
    token,
    setProductData,
    setDeliveryData,
    setIsLoading
  ) => {
    const data = await fetchData(`${baseUrl}/api/carts/${token}`);
    data.products && setProductData(data.products);
    setDeliveryData(data.order_detail ? data.order_detail : {});
    setIsLoading(false);
  };

  static addToCart = async (requestBody, setData, setIsLoading) => {
    const data = await fetchData(
      `${baseUrl}/api/carts/${requestBody.productId}`,
      "POST",
      requestBody
    );
    if (data.products) {
      setData(data.products);
    }
    setIsLoading(false);
  };

  static updateCart = async (requestBody, setData, setIsLoading) => {
    const data = await fetchData(
      `${baseUrl}/api/carts/${requestBody.productId}`,
      "PUT",
      requestBody
    );
    if (data.products) {
      setData(data.products);
    }
    setIsLoading(false);
  };

  static removeFromCart = async (requestBody, setData, setIsLoading) => {
    const data = await fetchData(
      `${baseUrl}/api/carts/${requestBody.productId}`,
      "DELETE",
      requestBody
    );
    if (data.products) {
      setData(data.products);
    }
    setIsLoading(false);
  };

  static updateCheckoutData = async (
    requestBody,
    setProductData,
    setDeliveryData,
    setIsLoading
  ) => {
    const data = await fetchData(
      `${baseUrl}/api/carts/checkout`,
      "POST",
      requestBody
    );
    data.products && setProductData(data.products);
    setDeliveryData(data.order_detail ? data.order_detail : {});
    setIsLoading(false);
  };
}
