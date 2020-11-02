import React, { useEffect } from "react";
import { FeatureProductQuestion } from "../../pages/login/login.styles";
import DialogMessageComponent from "../dialog-message/dialog-message.component";
import { CreateContainer } from "./create-products.styles";

import { Divider, ButtonWrap } from "../../styles/public.styles";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  Radio,
  CircularProgress,
  TextField,
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
import { selectCategoryCollection } from "../../redux/category/category.selector";

const CreateProductsComponent = (props) => {
  //Declarations
  const {
    fetchCreateProductStart,
    isCreating,
    actionSuccess,
    actionComplete,
    setActionComplete,
    setActionSuccess,
    categoriesCollection,
  } = props;

  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    featuredProduct: "",
    category: "",
    imgFile: "",
    description: "",
  });

  const {
    productName,
    price,
    category,
    description,
    featuredProduct,
  } = productData;

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
      description: "",
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
      <form onSubmit={handleSubmit} id="form-create">
        <CreateContainer>
          <Divider>
            <CustomInput
              name={"productName"}
              value={productName}
              text="Nombre"
              required={true}
              onChange={handleCHange}
              id={"productName"}
              disabled={disabled}
            />
          </Divider>
          <Divider>
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
          </Divider>
          <Divider>
            <FeatureProductQuestion>
              ¿Es producto principal?
            </FeatureProductQuestion>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
              value={featuredProduct}
              onChange={handleCHange}
            >
              <FormControlLabel
                value={"True"}
                control={<Radio color="primary" required={true} />}
                label="Si"
                labelPlacement="start"
                name={"featuredProduct"}
                disabled={disabled}
              />
              <FormControlLabel
                value={"False"}
                control={<Radio color="primary" required={true} />}
                label="No"
                labelPlacement="start"
                name={"featuredProduct"}
                disabled={disabled}
              />
            </RadioGroup>
          </Divider>
          <Divider>
            <FormControl fullWidth={true}>
              <InputLabel>Categoria</InputLabel>
              <Select
                onChange={handleCHange}
                name={"category"}
                required={true}
                value={category}
                disabled={disabled}
              >
                {categoriesCollection.map((c) => (
                  <MenuItem value={c.categoryName}>
                    {c.categoryName.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Divider>
          <Divider>
            <TextField
              id="standard-multiline-flexible"
              label="Descripcion del producto"
              multiline
              rows={10}
              name={"description"}
              variant="outlined"
              required={true}
              fullWidth={true}
              value={description}
              onChange={handleCHange}
            />
          </Divider>
          <Divider>
            <p>Selecione imagen</p>
            <CustomFileUpload
              loadFile={loadFile}
              disabled={disabled}
              required={true}
            />
          </Divider>
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
  categoriesCollection: selectCategoryCollection,
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
