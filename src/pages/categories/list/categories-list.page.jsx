import React from "react";
import { AppContainer } from "../../../App.styles";
import CategoriesComponent from "../../../components/categories/categories.component";
import { CategoriesPageContainer } from "./categories-list.styles";

const CategoriesListPage = () => (
  <AppContainer>
    <CategoriesComponent />
  </AppContainer>
);

export default CategoriesListPage;
