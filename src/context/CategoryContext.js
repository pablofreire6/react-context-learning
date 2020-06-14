import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const results = await axios.get(url);

      setCategories(results.data.drinks);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
