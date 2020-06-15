import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext();

const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, searchRecipes] = useState({
    nombre: "",
    categoria: "",
  });

  const [consultar, setConsultar] = useState(false);

  const { nombre, categoria } = search;

  useEffect(() => {
    if (consultar) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const results = await axios.get(url);
        setRecipes(results.data.drinks);
      };
      getRecipes();
    }
  }, [search]);

  return (
    <RecipeContext.Provider value={{ recipes, searchRecipes, setConsultar }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
