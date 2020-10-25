import React from "react";
import {
  ProductImageWrap,
  ImageWrap,
  DescriptionWrap,
  Price,
  Description,
  PriceWrap,
  ProductImg,OptionsWrap,ShopOptionWrap
} from "./product-card.styles";
import CustomButton from "../custom-button/custom-button.component";

import Zoom from 'react-reveal/Zoom';

const ProductCard = ({ urlImage, ProducName }) => (
  <Zoom>
    <ProductImageWrap>
      <ImageWrap>
        <ProductImg src={urlImage} />
      </ImageWrap>
      <DescriptionWrap>
        <Description>{ProducName}</Description>
      </DescriptionWrap>
      <PriceWrap>
        <Price>$ 100</Price>
      </PriceWrap>
      <OptionsWrap>
        <ShopOptionWrap>
          <CustomButton text='editar'  />
        </ShopOptionWrap>
        <ShopOptionWrap>
          <CustomButton text='Eliminar' background={"rgb(197, 219, 116)"}  />
        </ShopOptionWrap>
      </OptionsWrap>
    </ProductImageWrap>
  </Zoom>
);

export default ProductCard;
