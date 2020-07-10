import { baseUrl } from "../env.js";
import fetchData from "../utils/fetchData.js";

export class CategoriesApi {
  static getAllCategories = async (setData, setIsLoading) => {
    const data = await fetchData(`${baseUrl}/api/categories/all`);
    if (data.length > 0) {
      setData(data);
    }
    setIsLoading(false);
  };
  static getCategory = async (setData, setIsLoading, category) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/categories/all?name=${category}`
      );
      if (!response.status) throw Error(response.statusText);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (e) {
      console.log("There was an error when trying to fetch the categories", e);
    }
  };
}
