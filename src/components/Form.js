import React, { useContext, useState } from "react";

import { CategoriesContext } from "../context/CategoryContext";
import { RecipeContext } from "../context/RecipeContext";

const Form = () => {
  const [search, setSearch] = useState({
    nombre: "",
    categoria: "",
  });

  const { categories } = useContext(CategoriesContext);
  const { searchRecipes, setConsultar } = useContext(RecipeContext);

  const getRecipeData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-md-12"
      onSubmit={(e) => {
        e.preventDefault();
        searchRecipes(search);
        setConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría e ingrediente</legend>
      </fieldset>

      <div className="row">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            placeholder="Buscar por Ingrediente"
            type="text"
            onChange={getRecipeData}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={getRecipeData}
          >
            <option value="">-- Seleccionar --</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
