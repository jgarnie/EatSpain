import { baseUrl } from "../env.js";
export class ProductsApi {
  static getAllProducts = async (setData, setIsLoading, limit=null) => {
    try {
      console.log(limit)
      let url = null;
      if(limit){
        url = `${baseUrl}/api/products/all?limit=${limit}`
      }else{
        url = `${baseUrl}/api/products/all`
      }

//`${baseUrl}/api/products/all&category=${category}&limit=${limit}`
      const response = await fetch(url);
      if (!response.status) throw Error(response.statusText);
      const data = await response.json();
      console.log(url);
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
    static getProduct = async (productId, setData, setIsLoading) => {
      try {
        const response = await fetch(
          `${baseUrl}/api/products/product/${productId}`
        );
        if (!response.status) throw new Error(response.statusText);
        const data = await response.json();
        console.log(`product id ${productId} detail`, data);
        setData(data);
        setIsLoading(false);
      } catch (e) {
        console.log(
          `There was an error when trying to fetch product with id ${productId}`,
          e
        );
      }
    };
}
