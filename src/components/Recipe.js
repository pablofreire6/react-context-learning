import React, { useContext } from "react";

import { ModalContext } from "../context/ModalContext";

const Recipe = ({ recipe }) => {
  const { setIdRecipe } = useContext(ModalContext);
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={`Images of ${recipe.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIdRecipe(recipe.idDrink);
            }}
            className="btn btn-block btn-primary"
          >
            Ver Receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
