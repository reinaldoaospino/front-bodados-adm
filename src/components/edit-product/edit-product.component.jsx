import React, { useState } from "react";
import CustomInput from "../custom-input/custom-input.component";
import DialogMessageComponent from "../dialog-message/dialog-message.component";
import {
  ButtonWrap,
  EditContainer,
  FeatureProductQuestion,
  Divider,
  ProductImg,
  ImgWrap,
} from "./edit-product.styles";

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
import CustomFileUpload from "../custom-file-upload/custom-file-upload.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  selectActionComplete,
  selectActionFailure,
  selectActionSucess,
  selectIsUpdating,
} from "../../redux/product/product.selector";
import {
  fetchUpdateProdutcStart,
  setActionComplete,
  setActionFailure,
  setActionSuccess,
} from "../../redux/product/product.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Redirect, useHistory } from "react-router-dom";
import { selectCategoryCollection } from "../../redux/category/category.selector";

const EditProductComponent = (props) => {
  //Declarations
  const {
    fetchUpdateProdutcStart,
    isUpdating,
    actionSuccess,
    actionComplete,
    setActionComplete,
    setActionSuccess,
    product,
    categoriesCollection,
  } = props;

  const [productData, setProductData] = useState({
    idProduct: product ? product.id : null,
    productName: product ? product.productName : null,
    price: product ? product.price : null,
    featuredProduct: product
      ? product.featuredProduct === "True"
        ? "Yes"
        : "No"
      : null,
    category: product ? product.category : null,
    imgFile: product ? product.imagen : null,
    description: product ? product.description : null,
  });

  const history = useHistory();

  const [changeImg, setChangeImg] = useState("No");

  const {
    productName,
    price,
    category,
    featuredProduct,
    description,
    imgFile,
  } = productData;

  const disabled = isUpdating;

  //Funtions
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUpdateProdutcStart(productData);
  };

  const handleImgChange = (event) => {
    const { value } = event.target;
    setChangeImg(value);
  };

  const handleCHange = (event) => {
    const { value, name } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleCloseDialog = () => {
    setActionSuccess(false);
    setActionComplete(false);
    history.push("/productos/administrar");
  };

  const handleCloseDialogNo = () => {
    setActionSuccess(false);
    setActionComplete(false);
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

  return product ? (
    <div>
      <form onSubmit={handleSubmit} id="form-create">
        {actionSuccess ? (
          <DialogMessageComponent
            open={actionComplete}
            text="Producto actualizado Correctamente"
            handleCloseDialog={handleCloseDialog}
          />
        ) : (
          <DialogMessageComponent
            open={actionComplete}
            text="Fallo la actualización de productos"
            handleCloseDialog={handleCloseDialogNo}
          />
        )}
        <EditContainer>
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
                value={"Yes"}
                control={<Radio color="primary" required={true} />}
                label="Si"
                labelPlacement="start"
                name={"featuredProduct"}
                disabled={disabled}
              />
              <FormControlLabel
                value={"No"}
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
            disabled={disabled}
          />
          <ImgWrap>
            <span>Imagen:</span>
            <ProductImg src={`data:image/png;base64,${imgFile}`} />
          </ImgWrap>
          <Divider>
            <FormControl fullWidth={true}>
              <InputLabel>¿Deseas Cambiar de Imagen?</InputLabel>
              <Select
                onChange={handleImgChange}
                name={"changeImg"}
                value={changeImg}
                disabled={disabled}
              >
                <MenuItem value={"Yes"}>Si</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
          </Divider>
          {changeImg === "Yes" ? (
            <Divider>
              <p>Selecione imagen</p>
              <CustomFileUpload
                loadFile={loadFile}
                disabled={disabled}
                required={true}
              />
            </Divider>
          ) : null}
          <ButtonWrap>
            <CustomButton text={"Guardar Cambios"} disabled={disabled} />
            {isUpdating ? <CircularProgress /> : null}
          </ButtonWrap>
        </EditContainer>
      </form>
    </div>
  ) : (
    <Redirect to="/productos/administrar" />
  );
};

const mapStateToProps = createStructuredSelector({
  categoriesCollection: selectCategoryCollection,
  isUpdating: selectIsUpdating,
  actionSuccess: selectActionSucess,
  actionFailure: selectActionFailure,
  actionComplete: selectActionComplete,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUpdateProdutcStart: (productData) =>
    dispatch(fetchUpdateProdutcStart(productData)),
  setActionSuccess: (value) => dispatch(setActionSuccess(value)),
  setActionFailure: (value) => dispatch(setActionFailure(value)),
  setActionComplete: (value) => dispatch(setActionComplete(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductComponent);
