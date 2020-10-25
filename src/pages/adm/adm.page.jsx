import React, { useState } from "react";
import CustomInput from "../../components/custom-input/custom-input.component";
import { AdmContainer, ButtonWrap, InputWrap } from "./adm.styles";
import Radio from "@material-ui/core/Radio";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
} from "@material-ui/core";
import { FeatureProductQuestion } from "../login/login.styles";
import CustomFileUpload from "../../components/custom-file-upload/custom-file-upload.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { fetchCreateProdutcStart } from "../../redux/product/product.action";
import { connect } from "react-redux";

const AdmPage = ({ fetchCreateProductStart }) => {
  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    featuredProduct: "",
    category: "",
    imgFile: "",
  });

  const { productName, price, category } = productData;

  console.log(productData);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCreateProductStart(productData);
  };

  const handleCHange = (event) => {
    const { value, name } = event.target;
    setProductData({ ...productData, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <AdmContainer>
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
          <CustomFileUpload
            productData={productData}
            setProductData={setProductData}
          />
        </InputWrap>
        <ButtonWrap>
          <CustomButton text={"Aceptar"} />
        </ButtonWrap>
      </AdmContainer>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCreateProductStart: (productData) =>
    dispatch(fetchCreateProdutcStart(productData)),
});

export default connect(null, mapDispatchToProps)(AdmPage);
