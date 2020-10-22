import React from "react";
import {
  ButtonWrap,
  InputWrap,
  LoginForm,
  LoginPageCotainer,
  LoginTitleWrap,
  LoginWrap,
  Title,
} from "./login.styles";
import CustomImput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const LoginPage = () => {
  return (
    <LoginPageCotainer>
      <LoginForm>
        <LoginWrap>
          <LoginTitleWrap>
            <Title>Bocados admin</Title>
          </LoginTitleWrap>
          <InputWrap>
            <CustomImput text="Usuario" required={true} />
          </InputWrap>
          <InputWrap>
            <CustomImput text="Contraseña" required={true} type="password" />
          </InputWrap>

          <ButtonWrap>
            <CustomButton text="ingresar" />
          </ButtonWrap>
        </LoginWrap>
      </LoginForm>
    </LoginPageCotainer>
  );
};

export default LoginPage;
