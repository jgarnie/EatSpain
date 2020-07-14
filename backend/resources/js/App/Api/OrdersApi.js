import { baseUrl } from "./../../../../env.js";


 

  export const getOrders = async (setData, setIsLoading, status) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/orders?state=${status}`
      );
      if (!response.status) throw Error(response.statusText);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (e) {
      console.log("There was an error when trying to fetch the categories", e);
    }
  };
