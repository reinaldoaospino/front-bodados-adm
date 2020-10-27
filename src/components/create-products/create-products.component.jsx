import React from "react";
import { FeatureProductQuestion } from "../../pages/login/login.styles";
import DialogMessageComponent from "../dialog-message/dialog-message.component";
import {
  CreateContainer,
  InputWrap,
  ButtonWrap,
} from "./create-products.styles";

import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  Radio,
  CircularProgress,
} from "@material-ui/core";

import { useState } from "react";
import CustomInput from "../custom-input/custom-input.component";
import CustomFileUpload from "../custom-file-upload/custom-file-upload.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import {
  fetchCreateProdutcStart,
  setActionComplete,
  setActionFailure,
  setActionSuccess,
} from "../../redux/product/product.action";

import { createStructuredSelector } from "reselect";

import {
  selectActionComplete,
  selectActionFailure,
  selectActionSucess,
  selectIsCreating,
} from "../../redux/product/product.selector";

const CreateProductsComponent = (props) => {
  
  //Declarations
  const {
    fetchCreateProductStart,
    isCreating,
    actionSuccess,
    actionComplete,
    setActionComplete,
    setActionSuccess,
  } = props;

  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    featuredProduct: "",
    category: "",
    imgFile: "",
  });

  const { productName, price, category } = productData;

  const disabled = isCreating;

  //Funtions
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCreateProductStart(productData);
  };

  const handleCHange = (event) => {
    const { value, name } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleCloseDialog = () => {
    setActionSuccess(false);
    setActionComplete(false);
    setProductData({
      productName: "",
      price: "",
      featuredProduct: "",
      category: "",
      imgFile: "",
    });
    document.getElementById("form-create").reset();
  };

  const loadFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      var base64Img = reader.result.split(",")[1];
      setProductData({ ...productData, imgFile: base64Img });
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form-create">
        {actionSuccess ? (
          <DialogMessageComponent
            open={actionComplete}
            text="Producto Creado Correctamente"
            handleCloseDialog={handleCloseDialog}
          />
        ) : (
          <DialogMessageComponent
            open={actionComplete}
            text="Fallo la carga de productos"
            handleCloseDialog={handleCloseDialog}
          />
        )}
        <CreateContainer>
          <InputWrap>
            <CustomInput
              name={"productName"}
              value={productName}
              text="Nombre"
              required={true}
              onChange={handleCHange}
              id={"productName"}
              disabled={disabled}
            />
          </InputWrap>
          <InputWrap>
            <CustomInput
              name={"price"}
              value={price}
              text="Precio"
              required={true}
              onChange={handleCHange}
              id={"price"}
              disabled={disabled}
              type={"number"}
            />
          </InputWrap>
          <InputWrap>
            <FeatureProductQuestion>
              ¿Es producto principal?
            </FeatureProductQuestion>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value={"true"}
                control={<Radio color="primary" required={true} />}
                label="Si"
                labelPlacement="start"
                name={"featuredProduct"}
                onChange={handleCHange}
                disabled={disabled}
              />
              <FormControlLabel
                value={"false"}
                control={<Radio color="primary" required={true} />}
                label="No"
                labelPlacement="start"
                name={"featuredProduct"}
                onChange={handleCHange}
                disabled={disabled}
              />
            </RadioGroup>
          </InputWrap>
          <InputWrap>
            <FormControl fullWidth={true}>
              <InputLabel>Categoria</InputLabel>
              <Select
                onChange={handleCHange}
                name={"category"}
                required={true}
                value={category}
                disabled={disabled}
              >
                <MenuItem value={"Dessert"}>Dessert</MenuItem>
                <MenuItem value={"Cookies"}>Cookies</MenuItem>
                <MenuItem value={"Cakes"}>Cakes</MenuItem>
              </Select>
            </FormControl>
          </InputWrap>
          <InputWrap>
            <p>Selecione imagen</p>
            <CustomFileUpload loadFile={loadFile} disabled={disabled} />
          </InputWrap>
          <ButtonWrap>
            <CustomButton text={"Aceptar"} disabled={disabled} />
            {isCreating ? <CircularProgress /> : null}
          </ButtonWrap>
        </CreateContainer>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCreating: selectIsCreating,
  actionSuccess: selectActionSucess,
  actionFailure: selectActionFailure,
  actionComplete: selectActionComplete,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCreateProductStart: (productData) =>
    dispatch(fetchCreateProdutcStart(productData)),
  setActionSuccess: (value) => dispatch(setActionSuccess(value)),
  setActionFailure: (value) => dispatch(setActionFailure(value)),
  setActionComplete: (value) => dispatch(setActionComplete(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProductsComponent);
