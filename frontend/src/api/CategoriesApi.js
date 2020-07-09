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
}
