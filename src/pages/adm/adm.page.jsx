import React from "react";
import { Link } from "react-router-dom";
import { AppContainer } from "../../App.styles";
import CustomButton from "../../components/custom-button/custom-button.component";
import { AdmContainer, OptionWrap, OptionTitle } from "./adm.styles";

const LinkStyles = {
  textDecoration: "none",
  color: "black",
};

const AdmPage = () => {
  return (
    <AppContainer>
      <AdmContainer>
        <OptionWrap>
          <OptionTitle>Productos</OptionTitle>
          <Link to="/productos/crear" style={LinkStyles}>
            <CustomButton text="Crear" />
          </Link>
          <Link to="/productos/actualizar" style={LinkStyles}>
            <CustomButton text="Actualizar" />
          </Link>
          <Link to="/productos/eliminar" style={LinkStyles}>
            <CustomButton text="Eliminar" />
          </Link>
        </OptionWrap>
        <OptionWrap>
          <OptionTitle>Categorias</OptionTitle>
          <Link to="/categorias/create" style={LinkStyles}>
            <CustomButton text="Crear" background={"rgb(197, 219, 116)"} />
          </Link>
          <Link to="/categorias/actualizar" style={LinkStyles}>
            <CustomButton text="Actualizar" background={"rgb(197, 219, 116)"} />
          </Link>
          <Link to="/categorias/eliminar" style={LinkStyles}>
            <CustomButton text="Eliminar" background={"rgb(197, 219, 116)"} />
          </Link>
        </OptionWrap>
      </AdmContainer>
    </AppContainer>
  );
};

export default AdmPage;
