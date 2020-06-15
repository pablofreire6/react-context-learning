import React from "react";

import ListRecipes from "./components/ListRecipes";
import Header from "./components/Header";
import Form from "./components/Form";

import CategoriesProvider from "./context/CategoryContext";
import RecipeProvider from "./context/RecipeContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriesProvider>
      <RecipeProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ListRecipes />
          </div>
        </ModalProvider>
      </RecipeProvider>
    </CategoriesProvider>
  );
}

export default App;
