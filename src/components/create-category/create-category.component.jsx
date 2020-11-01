import React, { useEffect, useState } from "react";
import { FormContainer, Divider, ButtonWrap } from "../../styles/public.styles";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import {
  selectIsFetching,
  selectFetchingComplete,
  selectFetchingSuccess,
} from "../../redux/fetching/fetching.selector";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { createStructuredSelector } from "reselect";
import { fetchCreateCategoryStart } from "../../redux/category/category.action";
import {
  setFetchingComplete,
  setFetchingSuccess,
} from "../../redux/fetching/fetching.action";
import DialogMessageComponent from "../dialog-message/dialog-message.component";
import { selectCategoryError } from "../../redux/category/category.selector";

const CreateCategoryComponent = (props) => {
  const [categoryData, setCategoryData] = useState({
    categoryName: "",
  });

  const {
    isFetching,
    fetchingComplete,
    fetchingSuccess,
    fetchCreateCategoryStart,
    setFetchingSuccess,
    setFetchingComplete,
    errrorMessage
  } = props;

  const { categoryName } = categoryData;

  useEffect(() => {
    setFetchingComplete(false);
    setFetchingSuccess(false);
  });

  //Funtions
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCreateCategoryStart(categoryData);
  };

  const handleCloseDialog = () => {
    setFetchingComplete(false);
    setFetchingSuccess(false);
    setCategoryData({
      categoryName: "",
    });
    document.getElementById("form-category-create").reset();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCategoryData({ ...categoryData, [name]: value });
  };

  return (
    <div>
      {fetchingSuccess ? (
        <DialogMessageComponent
          open={fetchingComplete}
          text="Categoria Creado Correctamente"
          handleCloseDialog={handleCloseDialog}
        />
      ) : (
        <DialogMessageComponent
          open={fetchingComplete}
          text={errrorMessage}
          handleCloseDialog={handleCloseDialog}
        />
      )}
      <FormContainer onSubmit={handleSubmit} id="form-category-create">
        <Divider>
          <CustomInput
            name={"categoryName"}
            value={categoryName}
            text="Nombre Categoria"
            required={true}
            onChange={handleChange}
            id={"categoryName"}
            disabled={isFetching}
          />
        </Divider>
        <ButtonWrap>
          <CustomButton text={"Aceptar"} disabled={isFetching} />
          {isFetching ? <CircularProgress /> : null}
        </ButtonWrap>
      </FormContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  fetchingSuccess: selectFetchingSuccess,
  fetchingComplete: selectFetchingComplete,
  errrorMessage: selectCategoryError
});

const mapDispatchToProps = (dispatch) => ({
  fetchCreateCategoryStart: (data) => dispatch(fetchCreateCategoryStart(data)),
  setFetchingSuccess: (value) => dispatch(setFetchingSuccess(value)),
  setFetchingComplete: (value) => dispatch(setFetchingComplete(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryComponent);
