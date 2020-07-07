import React, { useState, useEffect, createContext } from "react";
import { CategoriesApi } from "../api/CategoriesApi";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    CategoriesApi.getAllCategories(setCategories, setIsLoading);
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
