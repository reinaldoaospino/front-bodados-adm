import React from "react";
import CustomListComponent from "../custom-list/custom-list.component";
import { CategoriesContainer } from "./categories.styles";
import exampleList from "./example-list.json";

const CategoriesComponent = () => (
  <CategoriesContainer>
    <CustomListComponent categories={exampleList} />
  </CategoriesContainer>
);

export default CategoriesComponent;
