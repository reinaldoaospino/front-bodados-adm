import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import WithSpinnerGet from "../with-spinner/with-spinner.component";
import CategoriesComponent from "./categories.component";
import {
  selectIsFetching,
  selectFetchingSuccess,
} from "../../redux/fetching/fetching.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  actionSuccess: selectFetchingSuccess,
});

const CategoryWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinnerGet
)(CategoriesComponent);

export default CategoryWithSpinner;
