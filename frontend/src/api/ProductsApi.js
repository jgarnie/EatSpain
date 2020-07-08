import { baseUrl } from "../env.js";
export class ProductsApi {
  static getAllProducts = async (setData, setIsLoading) => {
    try {
      const response = await fetch(`${baseUrl}/api/products/all`);
      if (!response.status) throw Error(response.statusText);
      const data = await response.json();
      console.log("all products", data);
      setData(data.products);
      setIsLoading(false);
    } catch (e) {
      console.log("There was an error when trying to fetch the products", e);
    }
  };

    static getSearchProducts = async (query, setData, setIsLoading) => {
      try {
        const response = await fetch(`${baseUrl}/api/search?query=${query}`);
        if (!response.status) throw Error(response.statusText);
        const data = await response.json();
        //console.log("search result", data);
        setData(data.products);
        setIsLoading(false);
      } catch (e) {
        console.log("There was an error when trying to fetch the search", e);
      }
    };
  
}
