import React, { useState } from "react";
import {
  ProductImageWrap,
  ImageWrap,
  DescriptionWrap,
  Price,
  Description,
  PriceWrap,
  ProductImg,
  OptionsWrap,
  ShopOptionWrap,
} from "./product-card.styles";
import CustomButton from "../custom-button/custom-button.component";
import Zoom from "react-reveal/Zoom";
import DialogMessageDeleteComponent from "../dialog-message-delete/dialog-message-delete.component";
import { fetchDeleteProductStart, setActionComplete } from "../../redux/product/product.action";
import { connect } from "react-redux";
import { selectActionSucess } from "../../redux/product/product.selector";
import { createStructuredSelector } from "reselect";

const ProductCard = (props) => {
  const {
    id,
    urlImage,
    ProductName,
    fetchDeleteProductStart,
    setActionComplete
  } = props;

  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => {
    setOpenDialog(false);
    setActionComplete(false);
  };

  const handleYesOption = () => {
    fetchDeleteProductStart(id);
  };

  return (
    <div>
      <DialogMessageDeleteComponent
        open={openDialog}
        text={`¿Deseas eliminar el producto ${ProductName}`}
        handleYes={handleYesOption}
        handleCloseDialog={handleClose}
      />
      <Zoom>
        <ProductImageWrap>
          <ImageWrap>
            <ProductImg src={urlImage} />
          </ImageWrap>
          <DescriptionWrap>
            <Description>{ProductName}</Description>
          </DescriptionWrap>
          <PriceWrap>
            <Price>$ 100</Price>
          </PriceWrap>
          <OptionsWrap>
            <ShopOptionWrap>
              <CustomButton text="editar" />
            </ShopOptionWrap>
            <ShopOptionWrap>
              <CustomButton
                text="Eliminar"
                onClick={() => setOpenDialog(true)}
                background={"rgb(197, 219, 116)"}
              />
            </ShopOptionWrap>
          </OptionsWrap>
        </ProductImageWrap>
      </Zoom>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  actionSuccess: selectActionSucess,
});
const mapDispatchToProps = (dispatch) => ({
  fetchDeleteProductStart: (id) => dispatch(fetchDeleteProductStart(id)),
  setActionComplete: (value) => dispatch(setActionComplete(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
