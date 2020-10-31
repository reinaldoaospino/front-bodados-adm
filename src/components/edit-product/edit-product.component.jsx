import React, { useState } from "react";
import CustomInput from "../custom-input/custom-input.component";
import DialogMessageComponent from "../dialog-message/dialog-message.component";
import {
  ButtonWrap,
  EditContainer,
  FeatureProductQuestion,
  InputWrap,
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
} from "@material-ui/core";
import CustomFileUpload from "../custom-file-upload/custom-file-upload.component";
import CustomButton from "../custom-button/custom-button.component";

const EditProductComponent = (props) => {
  //Declarations
  const {
    fetchCreateProductStart,
    isCreating,
    actionSuccess,
    actionComplete,
    setActionComplete,
    setActionSuccess,
    product,
  } = props;

  const [productData, setProductData] = useState({
    productName: product.productName,
    price: product.price,
    featuredProduct: product.featuredProduct === "True" ? "Yes" : "No",
    category: product.category,
    imgFile: product.img,
  });

  const { productName, price, category, featuredProduct } = productData;

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
        <EditContainer>
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
        </EditContainer>
      </form>
    </div>
  );
};

export default EditProductComponent;
