import React from "react";
import CustomListComponent from "../custom-list/custom-list.component";
import { CategoriesContainer } from "./categories.styles";
import exampleList from "./example-list.json";

const CategoriesComponent = ({collection}) => (
  <CategoriesContainer>
    <CustomListComponent categories={collection} />
  </CategoriesContainer>
);

export default CategoriesComponent;
