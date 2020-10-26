import React, { useState } from "react";
import CustomInput from "../../../components/custom-input/custom-input.component";
import {
  CreateContainer,
  ButtonWrap,
  InputWrap,
} from "./products-create.styles";
import Radio from "@material-ui/core/Radio";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
} from "@material-ui/core";
import { FeatureProductQuestion } from "../../login/login.styles";
import CustomFileUpload from "../../../components/custom-file-upload/custom-file-upload.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import { fetchCreateProdutcStart } from "../../../redux/product/product.action";
import { connect } from "react-redux";
import { AppContainer } from "../../../App.styles";
import DialogMessageComponent from "../../../components/dialog-message/dialog-message.component";
import SpinnerComponent from "../../../components/spinner/spinner.component";

const ProductsCreatePage = ({ fetchCreateProductStart }) => {
  const [productData, setProductData] = useState({
    productName: "",
    price: "",
    featuredProduct: "",
    category: "",
    imgFile: "",
  });
  const [openDialog, setOpenDialog] = React.useState(false);

  const { productName, price, category } = productData;

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchCreateProductStart(productData);
    setOpenDialog(true);

    setProductData({
      productName: "",
      price: "",
      featuredProduct: "",
      category: "",
      imgFile: "",
    });

    document.getElementById("form-create").reset();
  };

  const handleCHange = (event) => {
    const { value, name } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
    <AppContainer>
      <DialogMessageComponent
        open={openDialog}
        handleCloseDialog={handleCloseDialog}
        text="Producto creado correctamente"
      />
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
    </AppContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCreateProductStart: (productData) =>
    dispatch(fetchCreateProdutcStart(productData)),
});

export default connect(null, mapDispatchToProps)(ProductsCreatePage);
