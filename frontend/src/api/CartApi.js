import { baseUrl } from "../env.js";
export class CartApi {
  static getToken = async (token, setData) => {
    try {
      const response = await fetch(`${baseUrl}/api/carts?token=${token}`);
      if (!response.status) throw Error(response.statusText);
      const data = await response.json();
      console.log("_cartToken", data.token);
      setData(data.token);
    } catch (e) {
      console.log("There was an error when trying to fetch token", e);
    }
  };

  static getCartItems = async (token, setData, setIsLoading) => {
    try {
      const response = await fetch(`${baseUrl}/api/carts/cart/${token}`);
      if (!response.status) throw Error(response.statusText);
      const data = await response.json();
      console.log("cart products", data.products);
      setData(data.products);
      setIsLoading(false);
    } catch (e) {
      console.log("There was an error when trying to fetch ", e);
    }
  };
}
