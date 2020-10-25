import React from "react";
import { AppContainer } from "../../App.styles";
import CategoryMenuComponent from "../../components/category-menu/category-menu.component";
import ProductMenuComponent from "../../components/product-menu/product-menu.component";
import { AdmContainer } from "./adm.styles";

const AdmPage = () => {
  return (
    <AppContainer>
      <AdmContainer>
        <ProductMenuComponent
          fontSize="25px"
          color={"white"}
          background={"#F0AC81"}
          borderRadius="10px"
        />
        <CategoryMenuComponent
          fontSize="25px"
          color={"white"}
          background={"rgb(197, 219, 116)"}
          borderRadius="10px"
        />
      </AdmContainer>
    </AppContainer>
  );
};

export default AdmPage;
