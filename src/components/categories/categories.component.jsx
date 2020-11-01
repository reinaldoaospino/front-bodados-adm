import React from "react";
import CustomListComponent from "../custom-list/custom-list.component";
import { CategoriesContainer } from "./categories.styles";

const CategoriesComponent = ({collection}) => (
  <CategoriesContainer>
    <CustomListComponent categories={collection} />
  </CategoriesContainer>
);

export default CategoriesComponent;
