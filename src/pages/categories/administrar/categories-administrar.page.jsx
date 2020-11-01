import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { AppContainer } from "../../../App.styles";
import CategoryWithSpinner from "../../../components/categories/categories-with-spinner";
import { fetchGetCategoryStart } from "../../../redux/category/category.action";
import { selectCategoryCollection } from "../../../redux/category/category.selector";

const CategoriesAdministrarPage = ({
  categoriesCollection,
  fetchGetCategoryStart,
}) => {

  useEffect(() => {
    fetchGetCategoryStart();
  }, [fetchGetCategoryStart]);

  return (
    <AppContainer>
      <CategoryWithSpinner collection={categoriesCollection} />
    </AppContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  categoriesCollection: selectCategoryCollection,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGetCategoryStart: () => dispatch(fetchGetCategoryStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesAdministrarPage);
