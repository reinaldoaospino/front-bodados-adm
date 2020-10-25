import React from "react";
import ButtonMenu from "../menu-button/menu-button.component";
import {
  HeaderContainer,
  LogoWrap,
  MenuWrap,
  MenuOptionsWrap,
  Logo,
} from "./header.styles";
import LogoHeader from "../../assets/logoHeader.svg";

import { Link } from "react-router-dom";
import ProductMenuComponent from "../product-menu/product-menu.component";
import CategoryMenuComponent from "../category-menu/category-menu.component";

const Header = () => (
  <HeaderContainer>
    <LogoWrap>
      <Link to="/">
        <Logo ImageUrl={LogoHeader} />
      </Link>
    </LogoWrap>
    <MenuWrap>
      <ButtonMenu />
      <MenuOptionsWrap>
        <ProductMenuComponent />
        <CategoryMenuComponent />
      </MenuOptionsWrap>
    </MenuWrap>
  </HeaderContainer>
);

export default Header;
