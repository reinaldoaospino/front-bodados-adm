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
} from "@material-ui/core";
import { useState } from "react";
import CustomInput from "../custom-input/custom-input.component";
import CustomFileUpload from "../custom-file-upload/custom-file-upload.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { fetchCreateProdutcStart } from "../../redux/product/product.action";

const CreateProductsComponent = ({ fetchCreateProductStart }) => {
  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    featuredProduct: "",
    category: "",
    imgFile: "",
  });

  const { productName, price, category } = productData;

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchCreateProductStart(productData);

  };

  const handleCHange = (event) => {
    const { value, name } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  // const handleCloseDialog = () => {
  //   setOpenDialog(false);
  // };

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
        <CreateContainer>
          <InputWrap>
            <CustomInput
              name={"productName"}
              value={productName}
              text="Nombre"
              required={true}
              handleChange={handleCHange}
              id={"productName"}
            />
          </InputWrap>
          <InputWrap>
            <CustomInput
              name={"price"}
              value={price}
              text="Precio"
              required={true}
              handleChange={handleCHange}
              id={"price"}
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
              />
              <FormControlLabel
                value={"false"}
                control={<Radio color="primary" required={true} />}
                label="No"
                labelPlacement="start"
                name={"featuredProduct"}
                onChange={handleCHange}
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
              >
                <MenuItem value={"Dessert"}>Dessert</MenuItem>
                <MenuItem value={"Cookies"}>Cookies</MenuItem>
                <MenuItem value={"Cakes"}>Cakes</MenuItem>
              </Select>
            </FormControl>
          </InputWrap>
          <InputWrap>
            <p>Selecione imagen</p>
            <CustomFileUpload loadFile={loadFile} />
          </InputWrap>
          <ButtonWrap>
            <CustomButton text={"Aceptar"} />
          </ButtonWrap>
        </CreateContainer>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCreateProductStart: (productData) =>
    dispatch(fetchCreateProdutcStart(productData)),
});

export default connect(null, mapDispatchToProps)(CreateProductsComponent);
