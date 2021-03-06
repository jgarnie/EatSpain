import { baseUrl } from "../env.js";
import fetchData from "../utils/fetchData.js";
export class ProductsApi {
  static getAllProducts = async (setData, setIsLoading, page = null) => {
    try {
      let url = null;
      if (page) {
        url = `${baseUrl}/api/products/all?page=${page}`;
      } else {
        url = `${baseUrl}/api/products/all`;
      }

      //`${baseUrl}/api/products/all&category=${category}&limit=${limit}`
      const response = await fetch(url);
      if (!response.status) throw Error(response.statusText);
      const data = await response.json();

      setData(data.products);
      setIsLoading(false);
    } catch (e) {
      console.log("There was an error when trying to fetch the products", e);
    }
  };

  static getNewProducts = async (setData, setIsLoading, limit = 12) => {
    const data = await fetchData(`${baseUrl}/api/products/new?limit=${limit}`);
    if (data) {
      setData(data.products);
    }
    setIsLoading(false);
  };

  static getSearchProducts = async (query, setData, setIsLoading) => {
    try {
      const response = await fetch(`${baseUrl}/api/search?query=${query}`);
      if (!response.status) throw Error(response.statusText);
      const data = await response.json();
      setData(data.products);
      setIsLoading(false);
    } catch (e) {
      console.log("There was an error when trying to fetch the search", e);
    }
  };

  static getProduct = async (productId, setData, setIsLoading) => {
    const data = await fetchData(
      `${baseUrl}/api/products/product/${productId}`
    );
    if (data) {
      setData(data);
    }
    setIsLoading(false);
  };
}
