import { baseUrl } from "../env.js";
export class CategoriesApi {
  static getAllCategories = async (setData, setIsLoading) => {
    try {
      const response = await fetch(`${baseUrl}/api/categories/all`);
      if (!response.status) throw Error(response.statusText);
      const data = await response.json();
      console.log("all categories", data);
      setData(data);
      setIsLoading(false);
    } catch (e) {
      console.log("There was an error when trying to fetch the categories", e);
    }
  };
}
