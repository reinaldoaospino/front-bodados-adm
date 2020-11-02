import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateProductWithSpinner from "../../../components/create-products/create-products-with-spinner";
import { fetchGetCategoryStart } from "../../../redux/category/category.action";
import { CreateContainerPage } from "./products-create.styles";

const ProductsCreatePage = ({fetchGetCategoryStart}) => {
  
  useEffect(() => {
    fetchGetCategoryStart();
  }, [fetchGetCategoryStart]);
  return (
    <CreateContainerPage>
      <CreateProductWithSpinner />
    </CreateContainerPage>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchGetCategoryStart: () => dispatch(fetchGetCategoryStart()),
});


export default connect(null,mapDispatchToProps)(ProductsCreatePage);
